import axios from 'axios';
import React, {FC} from 'react';
import { ITodo} from '../types/types';
import List from './List';
import TodoItem from './TodoItem';

const TodosPage: FC = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([])

  React.useEffect(() => {
    fetchTodos();
  }, [])

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
          <List 
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />} 
          />
        </div>            
    )
}

export default TodosPage;