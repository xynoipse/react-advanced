import React, { useContext } from 'react';
import UserContext from './userContext';
import CartContext from './cartContext';

const MovieRow = () => {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);

  console.log('cartContext', cartContext);

  return (
    <div>
      MovieRow (Context:{' '}
      {userContext.currentUser ? userContext.currentUser.name : ''})
    </div>
  );
};

export default MovieRow;
