import React, { Component } from "react";
import "../assets/css/card.css";
import { Redirect } from "react-router";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class PokemonCard extends Component {
  state = {
    name: "",
    image: "",
    index: "",
    redirect: false,
  };

  componentDidMount() {
    const { name, url } = this.props;
    const index = url.split("/")[url.split("/").length - 2];
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

    this.setState({
      name,
      image,
      index,
    });
  }

  setRedirect = (index) => {
    this.setState({
      redirect: true,
      index: index,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: `/pokemon/${this.state.index}`,
          }}
        />
      );
    }
  };

  render() {
    return (
      <Card>
        {this.renderRedirect()}
        <CardContent>
          <Typography color="textPrimary" gutterBottom>
            {this.state.index}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {this.state.name}
          </Typography>
          <img src={this.state.image} alt="pokemon Image" />
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.setRedirect(`${this.state.index}`)}
        >
          Mostrar más
        </Button>
      </Card>
    );
  }
}

export default PokemonCard;
