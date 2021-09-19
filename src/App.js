// Libraries
import React, { useState } from 'react';

// Components
import { Header } from './components/Header';
import { GetStarted } from './components/GetStarted';
import { CodeChallenge } from './components/CodeChallenge';
import { Tools } from './components/Tools';
import { Share } from './components/Share';
import { Workflow } from './components/Workflow';
import { Pricing } from './components/Pricing';
import { MobileApp } from './components/MobileApp';
import { Subscribe } from './components/Subscribe';
import { StayTuned } from './components/StayTuned';

// Style
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   const [ language, setLanguage ] = useState(true);
  
  /**
   *
   */
  function toggleLanguage() {
    console.log('ok')
    setLanguage(!language);
  }
  
  return (
    <div className="App" dir = {language ? 'ltr' : 'rtl'}>
      <Header 
        toggleLanguage = {toggleLanguage}
        language = {language}
        />
      <GetStarted />
      <CodeChallenge />
      <Tools />
      <Share />
      <Workflow />
      <Pricing />
      <MobileApp />
      <Subscribe />
      <StayTuned />
    </div>
  );
}

export default App;
