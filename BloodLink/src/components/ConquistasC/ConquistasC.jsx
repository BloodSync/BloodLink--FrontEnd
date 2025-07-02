export default function ConquistaCard({ icon, title, description, date, unlocked }) {
  return (
    <div className={`conquista-card ${unlocked ? 'unlocked' : 'locked'}`}>
       
      <img src={icon} alt={title} />
          <div className="conquista-info">
        <h4>{title}</h4>
        <div className="conquista-text-row"> 
        <p>{description}</p>
        {unlocked && <p className="conquista-date">{date}</p>}
        </div>
      </div>
    </div>
  );
}