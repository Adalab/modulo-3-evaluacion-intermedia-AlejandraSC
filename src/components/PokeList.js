import '../stylesheets/App.css';
import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    const items = this.props.pokemons.map((pokemon, index) => {
      return (
        <li key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      );
    });

    return (
      <div className="pokelist">
        <ul>{items}</ul>
      </div>
    );
  }
}

export default PokeList;
