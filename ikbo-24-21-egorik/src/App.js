import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/main.css';
import MainPage from "./components/pages/MainPage";
import LabsPage from "./components/pages/LabsPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/labs" element={<LabsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
