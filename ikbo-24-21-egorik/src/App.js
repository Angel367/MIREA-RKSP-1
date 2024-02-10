import React, { useState } from 'react';
import './App.css';

const imageUrl = 'https://i.gifer.com/origin/91/9118b971b60b9e095e676781e1e63bb3_w200.gif';

function App() {
  const [rotationSpeed, setRotationSpeed] = useState(1);

  // Функции для увеличения и уменьшения скорости вращения
  const increaseSpeed = () => {
    setRotationSpeed(prevSpeed => prevSpeed + 1);
  };

  const decreaseSpeed = () => {
    setRotationSpeed(prevSpeed => Math.max(1, prevSpeed - 1));
  };

  return (
      <div className="App">
        <header className="App-header">
          <img src={imageUrl} className="App-logo" alt="logo" style={{ animationDuration: `${10 / rotationSpeed}s` }} />
          <h1 style={{ color: "blue"}}>я люблю майнкрафт</h1>
          <p>
            <button style={{margin: "15px"}} onClick={increaseSpeed}>Увеличить скорость</button>
            <button onClick={decreaseSpeed}>Уменьшить скорость</button>
          </p>
          <a style={{border: "2px solid red", margin: "10px"}}
             className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
