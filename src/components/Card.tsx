import React from 'react';

interface CardPros {
    width: string;
    height: string;
}

const Card = ({width, height}: CardPros) => {
  return (
    <div style={{width, height, backgroundColor: "silver"}}>
      
    </div>
  );
}

export default Card;