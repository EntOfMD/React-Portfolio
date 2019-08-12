import React from 'react';
import './style.css';

function Card(props) {
  return (
    <div className="card text-center mx-auto">
      <div className="img-container" />
      <div className="card-header">
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body content">{props.children}</div>
    </div>
  );
}

export default Card;
