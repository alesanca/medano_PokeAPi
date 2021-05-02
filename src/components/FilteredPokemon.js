import axios from "axios";
import React from "react";
import PokemonCard from "./PokemonCard";

export default class FilteredPokemon extends React.Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon?limit=600",
    pokemons: [],
  };

  async componentDidMount() {
    const { value } = this.props.match.params;
    const res = await axios.get(this.state.url);
    const noFiltered = res.data.results;
    const filtered = noFiltered.filter((poke) => poke.name.startsWith(value));
    console.log({ value, noFiltered, filtered });
    this.setState({ pokemons: filtered });
  }

  render() {
    return (
      <>
        {this.state.pokemons.length ? (
          <div className="pokemonCards">
            {this.state.pokemons.map((poke) => (
              <PokemonCard key={poke.name} name={poke.name} url={poke.url} />
            ))}
          </div>
        ) : (
          <h1> Loading </h1>
        )}
      </>
    );
  }
}
