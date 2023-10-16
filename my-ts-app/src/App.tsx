import React from 'react';
import { Header } from './components/header';
import { MusicField } from './components/musicField';
import { MusicPlayed } from './components/musicPlayed';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <br></br><br></br>
      <MusicField/>
      <br></br>
      <MusicField/>
      <br></br>
      <MusicPlayed/>
    </div>
  );
}

export default App;
