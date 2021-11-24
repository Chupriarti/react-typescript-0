import React from 'react';

interface CardProps {
    width: string;
    height: string;
}

const Card: React.FC<CardProps> = ({width, height, children}) => {
  return (
    <div style={{width, height, backgroundColor: "silver"}}>
      {children}
    </div>
  );
}

export default Card;