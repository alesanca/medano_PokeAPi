import axios from "axios";
import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const FilteredPokemon = () => {
  const [currentState, setNewState] = useState({
    url: "https://pokeapi.co/api/v2/pokemon?limit=600",
    pokemons: null,
  });

  useEffect(() => {
    getApi();
    async function getApi() {
      const { value } = this.props.match.params;
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=600"
      );
      const noFiltered = res.data["results"];
      const filtered = noFiltered.filter((poke) => poke.name.startsWith(value));
      setNewState({ pokemons: filtered });
    }
  }, []);

  return (
    <>
      {currentState.pokemons.length ? (
        <div className="pokemonCards">
          {currentState.pokemons.map((poke) => (
            <PokemonCard key={poke.name} name={poke.name} url={poke.url} />
          ))}
        </div>
      ) : (
        <h1> Loading </h1>
      )}
    </>
  );
};

export default FilteredPokemon;
