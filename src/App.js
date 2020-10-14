import React from 'react';
import logo from './logo.svg';
import './App.css';


import FluxoDesenvolvimento from './components/atividade/FluxoDesenvolvimento';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App">
      <FluxoDesenvolvimento></FluxoDesenvolvimento>
    </div>
  );
}

export default App;
