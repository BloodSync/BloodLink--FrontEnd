import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../services/api';

const API_KEY = 'AIzaSyDudwxbki8hOQI9szZh50Azo9eBPAws860';

function carregarScriptGoogleMaps(apiKey) {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

const statusLabels = {
  normal: { texto: 'Estoque normal', cor: 'green' },
  alerta: { texto: 'Estoque em alerta', cor: 'orange' },
  critico: { texto: 'Estoque crítico', cor: 'red' },
};

const PaginaHemocentros = () => {
  const [cep, setCep] = useState('');
  const [userCoords, setUserCoords] = useState(null);
  const [hemocentros, setHemocentros] = useState([]);
  const [listaFinal, setListaFinal] = useState([]);

  // 🔁 Carrega hemocentros do back-end
  useEffect(() => {
    const carregarHemocentros = async () => {
      try {
        const resposta = await api.get('/hemocentro');
        setHemocentros(resposta.data);
      } catch (erro) {
        console.error('Erro ao carregar hemocentros:', erro);
        alert('Erro ao carregar hemocentros');
      }
    };

    carregarHemocentros();
  }, []);

  const buscarCoordenadasPorGeocoding = async (cep) => {
    try {
      const res = await api.get(`/geocode/${cep}`);
      if (res.data.status === 'OK' && res.data.results.length) {
        return res.data.results[0].geometry.location;
      }
    } catch (erro) {
      console.error('Erro ao buscar coordenadas:', erro);
    }
    return null;
  };

  const buscarHemocentros = async () => {
    const cepLimpo = cep.replace(/\D/g, '');
    if (!/^\d{8}$/.test(cepLimpo)) return alert('CEP inválido');

    await carregarScriptGoogleMaps(API_KEY);

    const origem = await buscarCoordenadasPorGeocoding(cepLimpo);
    if (!origem) return alert('CEP não encontrado');

    setUserCoords(origem);

    const destinations = hemocentros.map(h => ({
      lat: h.latitude,
      lng: h.longitude
    }));

    const distanceService = new window.google.maps.DistanceMatrixService();
    distanceService.getDistanceMatrix(
      {
        origins: [origem],
        destinations,
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.METRIC,
      },
      (response, status) => {
        if (status !== 'OK') return alert('Erro ao calcular distâncias');

        const results = response.rows[0].elements;

        const listaOrdenada = hemocentros.map((h, i) => ({
          ...h,
          distanciaTexto: results[i].distance?.text || 'Indisponível',
          distanciaValor: results[i].distance?.value || Infinity,
        })).sort((a, b) => a.distanciaValor - b.distanciaValor);

        setListaFinal(listaOrdenada);
      }
    );
  };

  return (
    <div className="container-hemocentros">
      <h2>Buscar Hemocentros Próximos</h2>
      <input
        type="text"
        className="input-cep"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite seu CEP"
      />
      <button onClick={buscarHemocentros}>Buscar</button>

      <div className="lista-cards">
        {listaFinal.map((h, i) => (
          <div className="card-hemocentro" key={i}>
            <h3>{h.nome}</h3>
            <p>Distância: {h.distanciaTexto}</p>
            <p style={{ color: statusLabels[h.status]?.cor || 'gray' }}>
              {statusLabels[h.status]?.texto || 'Status desconhecido'}
            </p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&origin=${userCoords.lat},${userCoords.lng}&destination=${h.latitude},${h.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver rota
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginaHemocentros;
