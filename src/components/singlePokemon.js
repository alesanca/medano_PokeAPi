import axios from "axios";
import React from "react";
import "../assets/css/pokeInfo.css";
import Box from '@material-ui/core/Box';

export default class SinglePokemon extends React.Component {
  state = {
    name: "",
    index: "",
    url: "",
    image: "",
    description: "",
  };

  async componentDidMount() {
    const { index } = this.props.match.params;

    const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${index}/`;
    const descriptionURL = `https://pokeapi.co/api/v2/pokemon-species/${index}/`;

    const res = await axios.get(pokeUrl);
    const name = res.data.name;
    const image = res.data.sprites.front_default;
    let description = "";

    await axios.get(descriptionURL).then((res) => {
      res.data.flavor_text_entries.some((flavor) => {
        if (flavor.language.name === "en") {
          description = flavor.flavor_text;
          return description;
        }
      });
    });

    this.setState({ name, index, pokeUrl, image, description });
  }

  render() {
    return (
      <Box>
        <div className="topInfo">
          <p className="index">{this.state.index}</p>
          <p className="name">{this.state.name}</p>
        </div>
          <img src={this.state.image} alt="Pokemon sprite" />
        <p>{this.state.description}</p>
      </Box>
    );
  }
}
