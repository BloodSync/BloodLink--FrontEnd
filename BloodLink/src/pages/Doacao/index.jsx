import React, { useState, useEffect } from 'react';
import SlideTabs from './Components/SlideTab';
import Header from './Components/Header/HeaderDonate';
import Calendario from './Components/calendario';
import SeletorHemocentro from './Components/SeletorHemocentro';
import ConfirmarModal from './Components/ConfirmacaoModal';
import Historico from './Components/Historico';
import './styles.css';
import Navbar from '../../components/Sidebar/SidebarUser';

export default function Doacao() {
  const [abaAtual, setAbaAtual] = useState('doacao');
  const [selectedDate, setSelectedDate] = useState(null);
  const [hemocentroSelecionado, setHemocentroSelecionado] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [historico, setHistorico] = useState([]);
  const [horarioSelecionado, setHorarioSelecionado] = useState('');


  useEffect(() => {
    if (selectedDate && hemocentroSelecionado) {
      setModalAberto(true);
    }
  }, [selectedDate, hemocentroSelecionado]);

  useEffect(() => {
  if (selectedDate && hemocentroSelecionado && horarioSelecionado) {
    setModalAberto(true);
  }
}, [selectedDate, hemocentroSelecionado, horarioSelecionado]);

 const handleConfirmarDoacao = () => {
  setHistorico((prev) => [
    ...prev,
    {
      data: selectedDate.toLocaleDateString('pt-BR'),
      hemocentro: hemocentroSelecionado.nome,
      horario: horarioSelecionado,
    },
  ]);
  setModalAberto(false);
  setSelectedDate(null);
  setHemocentroSelecionado(null);
  setHorarioSelecionado('');
};


  return (
    <div className="pagina-doacao">
      <aside className="sidebar">{Navbar}</aside>

      <main className="conteudo">
        <Header />

        <SlideTabs abaAtual={abaAtual} setAbaAtual={setAbaAtual} />

        {abaAtual === 'doacao' ? (
          <div className="doacao-container">
            <div className="esquerda">
              <Calendario onSelectDate={setSelectedDate} value={selectedDate} />
            </div>

            <div className="direita">
              <SeletorHemocentro onSelect={setHemocentroSelecionado} />
             <div className="grade-horarios">
  {["08:00", "09:00", "10:00", "11:00", "14:00", "15:00"].map((h) => (
    <button
      key={h}
      className={`botao-horario ${horarioSelecionado === h ? 'selecionado' : ''}`}
      onClick={() => setHorarioSelecionado(h)}
    >
      {h}
    </button>
  ))}
</div>


            </div>
          </div>
        ) : (
          <Historico dados={historico} />
        )}

        <ConfirmarModal
          isOpen={modalAberto}
          onClose={() => setModalAberto(false)}
          onConfirm={handleConfirmarDoacao}
          data={selectedDate}
          horario={horarioSelecionado}
          hemocentro={hemocentroSelecionado}
        />
      </main>
    </div>
  );
}
