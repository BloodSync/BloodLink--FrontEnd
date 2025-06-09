import './styles.css';

export default function CardCarousel({ children, title }) {
  return (
    <div className="carousel-section">
      {title && <h2 className="carousel-title">{title}</h2>}
      <div className="card-carousel">
        {children}
      </div>
    </div>
  );
}
