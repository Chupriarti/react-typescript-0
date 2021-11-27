import axios from 'axios';
import React from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import { ITodo, IUser } from './types/types';
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  const [users, setUsers] = React.useState<IUser[]>([])
  const [todos, setTodos] = React.useState<ITodo[]>([])

  React.useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      setUsers(response.data)
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
      setTodos(response.data)
    } catch (e) {
      console.error(e);
    }
  }

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
      <List 
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user} />} 
      />
      <List 
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />} 
      />
      
    </div>
  );
}

export default App;
