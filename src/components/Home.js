import React from 'react';

import axios from 'axios';

export default class Home extends React.Component {
  state = {
    pokemons: []
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
      .then(res => {
        const pokemons = res.data;
        console.log(pokemons); //Devuelve un array de objetos
        this.setState({ pokemons });
      })
  }

  render() {
    return (
      <div>
        { this.state.pokemons.map(poke =>
            <p>{poke.name} </p>)}
      </div>
    )
  }
}