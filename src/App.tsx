import React from 'react';
import Card, { CardVariant } from './components/Card';

function App() {
  return (
    <div>
      <Card 
        width="200px" 
        height="300px"
        variant = {CardVariant.outlined}
        onClick={(num) => console.log("Hola!", num)}
      >
        <button>Button</button>
      </Card>
    </div>
  );
}

export default App;
