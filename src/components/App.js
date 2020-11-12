import '../stylesheets/App.css';
import React from 'react';
import Otro from './Otro';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="headerTitle">Componentes: Lista de Adalabers</h1>
        </header>
        <aside className="topBanner">
          <Otro />
        </aside>
      </div>
    );
  }
}

export default App;
