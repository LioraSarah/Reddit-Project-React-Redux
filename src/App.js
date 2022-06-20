import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import sideMenu from './components/sideMenu/sideMenu';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <sideMenu />
      </aside>
    </>
  );
}

export default App;
