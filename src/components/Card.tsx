import React, { FC } from 'react';

export enum CardVariant {
  outlined = "outlined",
  primary = "primary"
}

interface CardProps {
    width: string;
    height: string;
    variant?: CardVariant
    onClick: (num: number) => void;
}

const Card: FC<CardProps> = 
  ({
    width, 
    height, 
    children,
    variant,
    onClick
  }) => {
  const [state, setState] = React.useState(0);
  return (
    <div style={{width, height, 
      border: variant === CardVariant.outlined ? "1px solid black" : "",
      background: variant === CardVariant.primary ? "silver" : ""}}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
}

export default Card;