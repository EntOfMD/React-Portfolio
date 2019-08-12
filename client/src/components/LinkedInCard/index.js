import React from 'react';

import './style.css';

export default function LinkedInCard({
  recommendationBy,
  recommenderImg,
  recommementationTo,
  date,
  children
}) {
  return (
    <div className="card text-center mx-auto">
      <div className="img-container">
        <img
          src={recommenderImg ? recommenderImg : ''}
          className="card-img-top"
          alt={recommendationBy ? recommendationBy : ''}
        />
      </div>
      <div className="card-header">
        <h2>{recommendationBy ? recommendationBy : ''}</h2>
      </div>
      <div className="card-body content">{children ? children : ''}</div>
      <div class="card-footer" />
    </div>
  );
}
