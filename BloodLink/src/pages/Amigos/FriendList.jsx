import './FriendList.css'
import { useState, useRef, useEffect } from 'react';
import ListaAmigos from "../../components/MenuAmigos/Friends";
import AdicionarAmigos from "../../components/MenuAmigos/addFriends";
import PedidosAmizade from "../../components/MenuAmigos/FriendRequest";
import RankingAmigos from "../../components/MenuAmigos/FriendsRank";
import RankingGeral from "../../components/MenuAmigos/Ranking";
import { Link } from 'react-router-dom';
import AvatarUser from '../../assets/Linky-Fenix.png';


const sections = {
    'Lista de Amigos': <ListaAmigos />,
    'Adicionar Amigos': <AdicionarAmigos />,
    'Pedidos de Amizade': <PedidosAmizade />,
    'Ranking Amigos': <RankingAmigos />,
    'Ranking Geral': <RankingGeral />
};

export default function FriendsSideTab() {
    const [activeTab, setActiveTab] = useState('Todos');
    const rankingRef = useRef(null);

    useEffect(() => {
        if (activeTab.includes('Ranking')) {
            rankingRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [activeTab]);

    return (
        <>

            <div className="friendsContent">
              
                    <div className="friends-header">
                        <img src={AvatarUser} className="avatar" />
                        <h2 className="friend-list-title">Usuário &gt;&gt; </h2>
                        <p className="friend-list-txt"> Amigos e Ranking </p>
                    </div>
                    
                <div className="bottom-section">
                    <div className="sidebar-friends">
                        {/* seus botões sidebar */}
                        <p className="sidebar-title-friends" onClick={() => setActiveTab('Todos')}>Amigos</p>
                        <button
                            className={`sidebar-button ${activeTab === 'Lista de Amigos' ? 'active' : ''}`}
                            onClick={() => setActiveTab('Lista de Amigos')}
                        >
                            Lista de Amigos
                        </button>
                        <button
                            className={`sidebar-button ${activeTab === 'Adicionar Amigos' ? 'active' : ''}`}
                            onClick={() => setActiveTab('Adicionar Amigos')}
                        >
                            Adicionar Amigos
                        </button>
                        <button
                            className={`sidebar-button ${activeTab === 'Pedidos de Amizade' ? 'active' : ''}`}
                            onClick={() => setActiveTab('Pedidos de Amizade')}
                        >
                            Pedidos de Amizade
                        </button>

                        <p className="sidebar-title-friends" onClick={() => setActiveTab('Todos')}>Ranking</p>
                        <button
                            className={`sidebar-button ${activeTab === 'Ranking Amigos' ? 'active' : ''}`}
                            onClick={() => setActiveTab('Ranking Amigos')}
                        >
                            Ranking de Amigos
                        </button>
                        <button
                            className={`sidebar-button ${activeTab === 'Ranking Geral' ? 'active' : ''}`}
                            onClick={() => setActiveTab('Ranking Geral')}
                        >
                            Ranking Geral
                        </button>
                    </div>

                    <div className="friends-content" ref={rankingRef}>
                        {activeTab === 'Todos' ? (
                            <>
                                <ListaAmigos />
                                <hr/>
                                <RankingAmigos />
                            </>
                        ) : (
                            sections[activeTab]
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}