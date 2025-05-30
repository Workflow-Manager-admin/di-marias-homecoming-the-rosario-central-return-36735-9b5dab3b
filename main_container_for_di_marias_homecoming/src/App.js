import React from 'react';
import './App.css';
import Slideshow from './Slideshow';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <a
              className="btn"
              href="https://en.wikipedia.org/wiki/%C3%81ngel_Di_Mar%C3%ADa"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About Di María
            </a>
          </div>
        </div>
      </nav>
      <main>
        <div className="container" style={{ paddingTop: 90 }}>
          <Slideshow />
        </div>
      </main>
    </div>
  );
}

export default App;