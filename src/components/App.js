import '../stylesheets/App.css';
import React from 'react';
import pokemons from '../data/pokemons.json';
import PokeList from './PokeList';

class App extends React.Component {
  render() {
    return (
      <div>
        <PokeList pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
