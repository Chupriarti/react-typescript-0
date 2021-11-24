import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {
  const users: IUser[] = [
    {id: "1", name: "Mister A", email: "mister-a@mail.com", address: {city: "Moscow", street: "Krasnaya", zipcode: "001" }},
    {id: "2", name: "Mister B", email: "mister-b@mail.com", address: {city: "Leningrad", street: "Lenina", zipcode: "002" }}
  ]
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
      <UserList users={users}/>
    </div>
  );
}

export default App;
