import React, { useState, useEffect } from 'react';
import SlideTabs from './Components/SlideTab';
import Header from './Components/Header';
import Calendario from './Components/calendario';
import SeletorHemocentro from './Components/SeletorHemocentro';
import ConfirmarModal from './Components/ConfirmacaoModal';
import Historico from './Components/Historico';
import './styles.css';
import Navbar from '../../components/Sidebar';

export default function Doacao() {
  const [abaAtual, setAbaAtual] = useState('doacao');
  const [selectedDate, setSelectedDate] = useState(null);
  const [hemocentroSelecionado, setHemocentroSelecionado] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    if (selectedDate && hemocentroSelecionado) {
      setModalAberto(true);
    }
  }, [selectedDate, hemocentroSelecionado]);

  const handleConfirmarDoacao = () => {
    setHistorico((prev) => [
      ...prev,
      {
        data: selectedDate.toLocaleDateString('pt-BR'),
        hemocentro: hemocentroSelecionado.nome,
      },
    ]);
    setModalAberto(false);
    setSelectedDate(null);
    setHemocentroSelecionado(null);
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
          hemocentro={hemocentroSelecionado}
        />
      </main>
    </div>
  );
}
