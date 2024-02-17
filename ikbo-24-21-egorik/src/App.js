import React from 'react';
import './styles/main.css';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Body from "./components/Body";

function App() {
  return (
      <div>
        <Header />
        <div>
          {/* Здесь вы можете добавить контент для тела страницы */}
          <p>Это тело вашей страницы</p>
            <Body />
        </div>
          <Footer />
      </div>
  );
}

export default App;
