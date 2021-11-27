import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';

function App() {
  return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path={"/users"} element={<UsersPage />}>
            </Route>
            <Route path={"/todos"} element={<TodosPage />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
