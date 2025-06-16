import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

// Fix para ícones do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const hemocentrosBase = [
  { nome: 'Hemocentro SP', lat: -23.5555, lng: -46.6396 },
  { nome: 'Fundação Pró-Sangue', lat: -23.5615, lng: -46.6544 },
  { nome: 'Hospital das Clínicas', lat: -23.5561, lng: -46.6685 },
  { nome: 'Santa Casa', lat: -23.5456, lng: -46.6423 },
  { nome: 'Hospital São Paulo', lat: -23.5995, lng: -46.6411 },
  { nome: 'Hospital do Servidor Público Municipal', lat: -23.56673554083246, lng: -46.63930368403072 },
  { nome: 'Banco de Sangue - Hospital Beneficência Portuguesa de São Paulo', lat: -23.56991961973283, lng: -46.641827747525745 },
];

// Função para calcular distância (Haversine)
const calcularDistancia = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Componente para mover o mapa quando as coordenadas mudam
const MoverMapa = ({ coords }) => {
  const map = useMap();
  useEffect(() => {
    if (coords) map.setView([coords.lat, coords.lng], 13);
  }, [coords, map]);
  return null;
};

// Componente para exibir rota entre dois pontos
const Rota = ({ origem, destino }) => {
  const map = useMap();

  useEffect(() => {
    if (!origem || !destino) return;

    const rotaControl = L.Routing.control({
      waypoints: [
        L.latLng(origem.lat, origem.lng),
        L.latLng(destino.lat, destino.lng),
      ],
      routeWhileDragging: false,
      show: false,
      addWaypoints: false,
      draggableWaypoints: false,
      createMarker: () => null,
    }).addTo(map);

    return () => map.removeControl(rotaControl);
  }, [origem, destino, map]);

  return null;
};

// Componente principal do Mapa
const Mapa = () => {
  const [cep, setCep] = useState('');
  const [userCoords, setUserCoords] = useState(null);
  const [hemocentrosOrdenados, setHemocentrosOrdenados] = useState([]);
  const [filtro5km, setFiltro5km] = useState(false);
  const [hemocentroSelecionado, setHemocentroSelecionado] = useState(null);
  const mapaRef = useRef(null);

  const buscarCep = async () => {
    try {
      const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await resp.json();
      if (data.erro) {
        alert('CEP não encontrado.');
        return;
      }

      const endereco = `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`;

      const respGeo = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`
      );
      const geo = await respGeo.json();

      if (!geo.length) {
        alert('Não foi possível localizar.');
        return;
      }

      const { lat, lon } = geo[0];
      const coords = { lat: parseFloat(lat), lng: parseFloat(lon) };
      setUserCoords(coords);

      const hemocentrosComDist = hemocentrosBase.map((h) => {
        const distancia = calcularDistancia(coords.lat, coords.lng, h.lat, h.lng);
        return { ...h, distancia: distancia.toFixed(2) };
      });

      hemocentrosComDist.sort((a, b) => a.distancia - b.distancia);
      setHemocentrosOrdenados(hemocentrosComDist);
    } catch (error) {
      alert('Erro ao buscar CEP');
    }
  };

  const focarNoMapa = (lat, lng, hemocentro) => {
    if (mapaRef.current) {
      mapaRef.current.setView([lat, lng], 15);
      setHemocentroSelecionado(hemocentro);
    }
  };

  const hemocentrosFiltrados = filtro5km
    ? hemocentrosOrdenados.filter((h) => parseFloat(h.distancia) <= 5)
    : hemocentrosOrdenados;

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* SIDEBAR */}
      <div style={{ width: '300px', padding: '20px', borderRight: '1px solid #ccc', overflowY: 'auto' }}>
        <h2>Buscar Hemocentros</h2>
        <input
          type="text"
          value={cep}
          placeholder="Digite seu CEP"
          onChange={(e) => setCep(e.target.value)}
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <button onClick={buscarCep} style={{ width: '100%' }}>
          Buscar
        </button>

        <div style={{ marginTop: '20px' }}>
          <label>
            <input
              type="checkbox"
              checked={filtro5km}
              onChange={() => setFiltro5km((prev) => !prev)}
            />
            {'  '}Mostrar apenas até 5km
          </label>
        </div>

        <hr />

        <h3>Hemocentros próximos:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {hemocentrosFiltrados.map((h, i) => (
            <li key={i} style={{ marginBottom: '10px' }}>
              <strong>{h.nome}</strong>
              <br />
              {h.distancia} km
              <br />
              <button onClick={() => focarNoMapa(h.lat, h.lng, h)}>
                Ver no mapa
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* MAPA */}
      <div style={{ flex: 1 }}>
        <MapContainer
          center={[-23.5505, -46.6333]}
          zoom={12}
          style={{ height: '100%', width: '100%' }}
          whenCreated={(mapInstance) => (mapaRef.current = mapInstance)}
        >
          <TileLayer
            attribution="© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {userCoords && (
            <Marker position={[userCoords.lat, userCoords.lng]}>
              <Popup>Você está aqui</Popup>
            </Marker>
          )}

          {hemocentrosFiltrados.map((h, i) => (
            <Marker key={i} position={[h.lat, h.lng]}>
              <Popup>
                <strong>{h.nome}</strong>
                <br />
                Distância: {h.distancia} km
              </Popup>
            </Marker>
          ))}

          {userCoords && <MoverMapa coords={userCoords} />}
          
          {userCoords && hemocentroSelecionado && (
            <Rota
              origem={userCoords}
              destino={{
                lat: hemocentroSelecionado.lat,
                lng: hemocentroSelecionado.lng,
              }}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default Mapa;