import React from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <EventsExample />
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
