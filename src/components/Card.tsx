import React from 'react';

interface CardProps {
    width: string;
    height: string;
    children?: React.ReactChild | React.ReactNode;
}

const Card = ({width, height, children}: CardProps) => {
  return (
    <div style={{width, height, backgroundColor: "silver"}}>
      {children}
    </div>
  );
}

export default Card;