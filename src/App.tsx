import axios from 'axios';
import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {
  const [users, setUsers] = React.useState<IUser[]>([])

  React.useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      setUsers(response.data)
    } catch (e) {
      console.error(e);
    }
  }

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
