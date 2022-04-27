import logo from './logo.svg';
import './App.css';
import { Test } from "./Components/Test";
import { useState } from "react";

function App() {
  const [ isToggled, setIsToggled] = useState(false);
  return (
    <div className='App'>
      <button onClick={() => setIsToggled(!isToggled)}>Start</button>
      { isToggled && <Test />}
      { isToggled ? <Test /> : <p> Welcome to Tell Your Tale! </p>}
      
    </div>
  );
}

export default App;
