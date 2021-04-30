import React from 'react';
import axios from 'axios';

import PokemonCard from "./PokemonCard";

export default class Home extends React.Component {
  state = {
    url :'https://pokeapi.co/api/v2/pokemon/',
    pokemons: null
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemons : res.data['results']})
  }

  render() {
    return (
      <>
        {this.state.pokemons ? ( 
          <div className="pokemonCard"> 
          { this.state.pokemons.map(poke => 
          <PokemonCard 
            key={poke.name}
            name={poke.name}
            url={poke.url}
          />
      )}
      </div>
      ) : (
      <h1> Loading </h1>
    )}
      </>
    )
  }
}
