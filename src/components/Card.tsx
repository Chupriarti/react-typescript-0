import React from 'react';

interface CardPros {
    width: string;
    height: string;
    children?: React.ReactChild | React.ReactNode;
}

const Card = ({width, height, children}: CardPros) => {
  return (
    <div style={{width, height, backgroundColor: "silver"}}>
      {children}
    </div>
  );
}

export default Card;