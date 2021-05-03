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

import React, { useState, useEffect } from "react";
import "../assets/css/card.css";
import { Redirect } from "react-router";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const PokemonCard = (props) => {
  const [currentPokemon, setPokemon] = useState({
    name: "",
    image: "",
    index: "",
  });

  const [redirect, setNewRedirect] = useState(false);

  useEffect(() => {
    getApi();
    function getApi() {
      const { name, url } = props;
      const index = url.split("/")[url.split("/").length - 2];
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

      setPokemon({
        name,
        image,
        index,
      });
    }
  });

  const setRedirect = (index) => {
    setPokemon({ index: index });
    setNewRedirect(true);
  };

  const renderRedirect = () => {
    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: `/pokemon/${currentPokemon.index}`,
          }}
        />
      );
    }
  };

  return (
    <Card>
      {renderRedirect()}
      <CardContent>
        <Typography color="textPrimary" gutterBottom>
          {currentPokemon.index}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {currentPokemon.name}
        </Typography>
        <img src={currentPokemon.image} alt="pokemon Image" />
      </CardContent>
      <Button
        classname="buttonCard"
        variant="contained"
        color="primary"
        onClick={() => setRedirect(`${currentPokemon.index}`)}
      >
        Mostrar más
      </Button>
    </Card>
  );
};

export default PokemonCard;
