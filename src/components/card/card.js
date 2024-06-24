import React from 'react';
import './card.css';

function Card({ onClick, frontContent, backContent }) {
  return (
    <div className="card" onClick={onClick}>
        <div className="card-front">{frontContent}</div>
        <div className="card-back">{backContent}</div>
    </div>
  );
}

export default Card;
