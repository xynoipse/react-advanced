import { Fragment } from 'react';
import './App.css';
import Movie from './hoc/Movie';
import Counter from './hooks/Counter';
import Users from './hooks/Users';

function App() {
  return (
    <Fragment>
      <div className="App">
        <Movie id={1} />
        <Counter />
      </div>
      <Users />
    </Fragment>
  );
}

export default App;
