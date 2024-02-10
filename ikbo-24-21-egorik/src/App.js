import React from 'react';
import './styles/main.css';
import './styles/header.css'
import Header from "./Header";


function App() {
  return (
      <div>
        <Header />
        <div>
          {/* Здесь вы можете добавить контент для тела страницы */}
          <p>Это тело вашей страницы</p>
        </div>
      </div>
  );
}

export default App;
