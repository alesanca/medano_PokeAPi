import React, { useState, useEffect } from "react";
import axios from "axios";

import PokemonCard from "./PokemonCard";

const Home = () => {
  const [currentState, setNewState] = useState({
    url: "https://pokeapi.co/api/v2/pokemon?limit=600",
    pokemons: null,
  });

  useEffect(() => {
    getApi();
    async function getApi() {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=600"); //I tried to use currentState.url but I got an error
      setNewState({ pokemons: res.data["results"] });
    }
  }, []);

  return (
    <>
      {currentState.pokemons ? (
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

export default Home;
