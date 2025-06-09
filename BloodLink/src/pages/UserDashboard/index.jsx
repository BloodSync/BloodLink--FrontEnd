import Card from '../../components/Card';
import Navbar from '../../components/Sidebar';
import CardCarousel from '../../components/CardCarousel';
import HeaderDash from './HeaderDashboard';
import './styles.css';
import Logo  from '../../assets/logo.png'
import { showNav } from '../../utils/showNav'

export default function Home() {
  return (
    <div className="home-container">
      {/* <Navbar/> */}
      <main className="home-main">
     <div className="logo-container" onClick={showNav}>
  <img
    src={Logo}
    alt="BloodLink Logo"
    className="home-logo"
  />
  <span className="logo-text">
    <span className="logo-blood">Blood</span>Link
  </span>
</div>
        <HeaderDash>
        <header className="home-header">
        
         <h1>Home - Para você</h1>
        </header> 
        </HeaderDash>
        <section className="home-content">
          <CardCarousel>
            <Card
              title="Notícias"
              imageUrl="https://source.unsplash.com/400x300/?news"
              icon={<i className="fas fa-newspaper"></i>}
            />
            <Card
              title="Missões"
              imageUrl="https://source.unsplash.com/400x300/?runner"
              icon="🎯"
            />
            <Card
              title="Ranking"
              imageUrl="https://source.unsplash.com/400x300/?trophy"
              icon="🏁"
            />
            {/* Outros cards aqui */}
          </CardCarousel>
        </section>
      </main>
    </div>
  );
}
