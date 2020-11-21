import '../stylesheets/App.css';
import React from 'react';
import pokemons from '../data/pokemons.json';
import PokeList from './PokeList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Mi lista de pokemons</h1>
        <PokeList className="pokeContainer" pokemonsList={pokemons} />
      </div>
    );
  }
}

export default App;
