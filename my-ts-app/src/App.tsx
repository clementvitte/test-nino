import React from 'react';
import { Header } from './components/header';
import { MusicField } from './components/musicField';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundColor:"black"}}>
      <Header></Header>
      <br></br><br></br>
      <MusicField/>
      <br></br>
      <MusicField/>
      <br></br>
      <MusicField/>
    </div>
  );
}

export default App;
