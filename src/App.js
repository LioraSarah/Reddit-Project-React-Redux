import React from 'react';
import './App.css';
//import {Home} from './components/home/Home';
import {Header} from './components/header/Header';
//import sideMenu from './components/sideMenu/sideMenu';
import Subreddits from './components/sideMenu/Subreddits';

function App() {
  return (
    <>

      <Header />

      <aside>
        <Subreddits />
      </aside>

    </>
  );
}

export default App;
