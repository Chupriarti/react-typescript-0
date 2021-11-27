import axios from 'axios';
import React, {FC} from 'react';
import { IUser } from '../types/types';
import List from './List';
import UserItem from './UserItem';
import {useNavigate} from 'react-router-dom';

const UsersPage: FC = () => {

    const [users, setUsers] = React.useState<IUser[]>([])
    const navigate = useNavigate();
  
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
            <List 
                items={users}
                renderItem={(user: IUser) => <UserItem onClick={(user) => navigate("/users/" + user.id)} key={user.id} user={user} />} 
            />
        </div>            
    )
}

export default UsersPage;