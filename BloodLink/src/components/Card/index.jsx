import './styles.css';

export default function Card({
  title,
  imageUrl,
  icon,
  width = '200px',
  height = '280px'
}) {
  return (
    <div className="card" style={{ width, height }}>
      <div className="card-bg-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="card-overlay">
          <div className="card-icon">{icon}</div>
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </div>
  );
}
