import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <header>
      <h1 className='title'>Películas</h1>
    </header>
  );
}

export default App;
