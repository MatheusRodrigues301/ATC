import React from 'react';
import './App.css';

import Routes from './routes'
import Logo from './assets/logo1.png'

function App() {
  return (
    <div className="container">
      <img src={Logo} alt="Logo" className="logo" />
      <section className="content">
        <Routes />
      </section>
    </div>
  );
}

export default App;
