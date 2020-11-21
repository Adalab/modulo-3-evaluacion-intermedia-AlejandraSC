import '../stylesheets/pokemon.css';
import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const items = this.props.pokemon.types.map((type, index) => {
      return (
        <li key={index} className="eachPokeType">
          {type}
        </li>
      );
    });

    return (
      <div className="eachPokemonContainer">
        <h2 className="eachPokeTitle">{this.props.pokemon.name}</h2>
        <img src={this.props.pokemon.url} alt="pokemon" />
        <ul>{items}</ul>
      </div>
    );
  }
}

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
};

export default Pokemon;
