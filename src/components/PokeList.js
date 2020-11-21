import '../stylesheets/App.css';
import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    const items = this.props.pokemonsList.map((pokemon, index) => {
      return (
        <li key={index} className="eachPokeContainer">
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
