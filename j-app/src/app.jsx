import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.jsx"; 
import Resume from "./pages/resume.jsx";
import Contact from "./pages/contact.jsx";
import Experience from "./pages/experience.jsx";
import Header from "./components/header.jsx";
import "./styles/home.css"; 

const fillerStyle = { padding: "100px 20px", textAlign: "center", minHeight: "60vh" };

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col text-base-content bg-base-100">
      <BrowserRouter>
        
        <header className="bg-base-200 px-6 py-4 flex items-center border-b border-base-300 w-full">
          <Header /> 
        </header>

        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div style={fillerStyle}><h1>404</h1></div>} />
          </Routes>
        </main>
        
      </BrowserRouter>
    </div>
  ); 
}

export default App;