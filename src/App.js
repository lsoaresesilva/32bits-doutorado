import React from 'react';
import logo from './logo.svg';
import './App.css';
import Planejamento from './components/atividade/Planejamento';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App">
      <Planejamento></Planejamento>
    </div>
  );
}

export default App;
