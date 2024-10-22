import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
 const[count,setCount]=useState(10)
  const addValue = () => {
    setCount(count+1);
  };


  const removeValue = () => {
    setCount(count-1);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>count is:{count}</h2>
      {/* Corrected onClick handlers */}
      <button onClick={addValue}>Count++</button>
      <button onClick={removeValue}>Count--</button>
    </>
  );
}

export default App;
