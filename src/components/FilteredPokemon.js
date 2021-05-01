import axios from 'axios';
import React from 'react'
import PokemonCard from "./PokemonCard";

export default class FilteredPokemon extends React.Component {

    state = {
        url :'https://pokeapi.co/api/v2/pokemon?limit=600',
        pokemons: null
      }
    
      async componentDidMount() {

        const { value } = this.props.match.params;

        const res = await axios.get(this.state.url);
        this.setState({ pokemons : res.data['results']})

        const noFiltered = this.state.pokemons;
        const filtered = [];

        for(let i = 0 ; i < this.state.pokemons ; i++){
            if(this.state.pokemons[i].name .startsWith({value})){
                console.log("It works");
            }
        }
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
