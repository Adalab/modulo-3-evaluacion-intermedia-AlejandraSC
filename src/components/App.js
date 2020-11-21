import '../stylesheets/App.css';
import React from 'react';
import pokemons from '../data/pokemons.json';
import PokeList from './PokeList';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="mainTitle">Mi lista de pokemons</h1>
        <PokeList pokemonsList={pokemons} />
      </div>
    );
  }
}

export default App;
