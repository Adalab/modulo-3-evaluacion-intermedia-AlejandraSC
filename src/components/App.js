import '../stylesheets/App.css';
import React from 'react';
import pokemons from '../data/pokemons.json';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemons,
    };
  }

  render() {
    return (
      <div>
        <h1 className="mainTitle">Mi lista de pokemons</h1>
        <PokeList pokemonsList={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
