import axios from 'axios';
import React, {FC} from 'react';
import { IUser } from '../types/types';
import {useParams, useNavigate } from 'react-router-dom';

const UserItemPage: FC = () => {
    const [user, setUser] = React.useState<IUser | null>(null);
    const params = useParams();
    const navigate = useNavigate ();
  
    React.useEffect(() => {
      fetchUsers();
    }, [])
  
    async function fetchUsers() {
        try {
          const response = await axios.get<IUser>("https://jsonplaceholder.typicode.com/users/" + params?.id);
          setUser(response.data)
        } catch (e) {
          console.error(e);
        }
      }

    return (
        <div>
            <button onClick={() => navigate("/users")}>Back</button>
            <h1>User's page {user?.name}</h1>
            <div>{user?.email}</div>
            <div>{user?.address?.city} {user?.address?.street} {user?.address?.zipcode}</div>
        </div>            
    )
}

export default UserItemPage;