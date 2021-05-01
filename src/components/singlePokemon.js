import axios from "axios";
import React from "react";

export default class SinglePokemon extends React.Component {
  state = {
    name: "",
    index: "",
    url: "",
    types: "",
    image: "",
  };

  async componentDidMount() {
    const { index } = this.props.match.params;

    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${index}/`;

    const res = await axios.get(pokeUrl);
    const name = res.data.name;
    const image = res.data.sprites.front_default;
    const types = res.data.types.map((i) => i.type.name);

    this.setState({ name, index, pokeUrl, types, image });
  }

  render() {
    return (
      <div className="pokemonInfo">
        <div className="topInfo">
          <p>{this.state.index}</p>
          <p>{this.state.name}</p>
        </div>
        <div className="cardBody">
          <img src={this.state.image} alt="Pokemon sprite" />
        </div>
      </div>
    );
  }
}
