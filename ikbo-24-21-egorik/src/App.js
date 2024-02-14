import React from 'react';
import './styles/main.css';
import './styles/header.css'
import Header from "./Header";
import Footer from "./Footer"

function App() {
  return (
      <div>
        <Header />
        <div>
          {/* Здесь вы можете добавить контент для тела страницы */}
          <p>Это тело вашей страницы</p>
        </div>
          <Footer />
      </div>
  );
}

export default App;
