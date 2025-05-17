import React from 'react';
import '../styles/Card.css';

const Card = ({ title, children, footer }) => {
  return (
    <div className="card">
      {title && <div className="card-title"><h3>{title}</h3></div>}

      <div className="card-content">
        {children}
      </div>

      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
