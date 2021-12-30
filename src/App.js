import React from 'react';
import NavTop from './components/NavTop';
import './App.css';
import './components/NavTop.css'
import { Outlet } from 'react-router';


function App() {
  return (
    <>
      <header className="App-header">
        <NavTop/>
      </header>
      <main className="App-main">
        <Outlet/>
      </main>
      <footer className="App-footer">
      </footer>
    </>
  );
}

export default App;
