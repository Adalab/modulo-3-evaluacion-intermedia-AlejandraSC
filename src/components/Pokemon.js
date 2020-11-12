import '../stylesheets/App.css';
import React from 'react';

class Pokemon extends React.Component {
  render() {
    const items = this.props.pokemon.types.map((name, index) => {
      return <li key={index}>{name}</li>;
    });

    return (
      <article className="Pokemon">
        <h2>{this.props.pokemon.name}</h2>
        <img src={this.props.pokemon.url} alt="" />
        <ul>{items}</ul>
      </article>
    );
  }
}

export default Pokemon;
