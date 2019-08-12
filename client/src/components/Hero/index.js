import React from 'react';
import './style.css';

export default function Hero(props) {
  return (
    <div
      className="hero text-center"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <div className="pt-5 text-info">{props.children}</div>
    </div>
  );
}
