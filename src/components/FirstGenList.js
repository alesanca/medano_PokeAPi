import React from 'react';
import axios from 'axios';

import PokemonCard from "./PokemonCard";
import "../assets/css/card.css";

export default class FirstGenList extends React.Component {
  state = {
    url :'https://pokeapi.co/api/v2/pokemon?limit=151',
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
            <div className="pokemonCards"> 
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

