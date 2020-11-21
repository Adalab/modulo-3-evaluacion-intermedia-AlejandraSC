import '../stylesheets/App.css';
import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    const items = this.props.pokemonsList.map((item) => {
      return (
        <li key={item.id} className="eachPokeContainer">
          <Pokemon pokemon={item} types={item.types} />
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

PokeList.propTypes = {
  pokemonsList: PropTypes.array,
};

export default PokeList;
