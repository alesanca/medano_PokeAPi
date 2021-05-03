import React, { useState, useEffect } from "react";
import axios from "axios";

import PokemonCard from "./PokemonCard";
import "../assets/css/card.css";

const FirstGenList = () => {
  const [currentState, setNewState] = useState({
    url: "https://pokeapi.co/api/v2/pokemon?limit=151",
    pokemons: null,
  });

  useEffect(() => {
    getApi();
    async function getApi() {
      const res = await axios.get(currentState.url); //I dont get that error in this component, I don't why
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

export default FirstGenList;
