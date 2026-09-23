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
    <>
      <div className="min-h-screen w-full flex flex-col text-base-content bg-base-200">
        <div className="p-4 md:p-10 flex-1 flex flex-col">
          
          <BrowserRouter>
            <div className="bg-base-100 border border-base-300 shadow-xl rounded-xl overflow-hidden flex-1 flex flex-col">
          
              <div className="bg-base-200 px-4 py-3 flex items-center gap-6 border-b border-base-300">
                  
                  <div className="flex items-center gap-2 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  
                  <div className="flex-1 flex justify-start">
                      <Header /> 
                  </div>

              </div>

              <main className="flex-1 overflow-y-auto">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<div style={fillerStyle}><h1>404</h1></div>} />
                  </Routes>
              </main>
              
            </div>
          </BrowserRouter>

        </div>
      </div>
    </>
  ); 
}

export default App;