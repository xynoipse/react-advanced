import React, { useState, Fragment } from 'react';
import './App.css';
import Movie from './hoc/Movie';
import Counter from './hooks/Counter';
import Users from './hooks/Users';

import UserContext from './context/userContext';
import CartContext from './context/cartContext';
import MoviePage from './context/MoviePage';
import Login from './context/Login';

import ReducerCtr from './reducer/Counter';
import Todo from './reducer/Todo';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLoggedIn = (username) => {
    console.log('Getting the user:' + username);
    const user = { name: 'Jason' };
    setCurrentUser(user);
  };

  return (
    <Fragment>
      <div className="App">
        <Movie id={1} />
        <Counter />
      </div>

      <Users />

      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{ currentUser, onLoggedIn: handleLoggedIn }}
        >
          <MoviePage />
          <Login />
        </UserContext.Provider>
      </CartContext.Provider>

      <ReducerCtr />
      <Todo />
    </Fragment>
  );
};

export default App;
