import React from 'react';
import './style.css';

function Card({ image, heading, children }) {
  return (
    <div className="card text-center mx-auto">
      <div className="img-container">
        <img src={image} className="card-img-top" alt={heading} />
      </div>
      <div className="card-header">
        <h2>{heading}</h2>
      </div>
      <div className="card-body content">{children}</div>
    </div>
  );
}

export default Card;
