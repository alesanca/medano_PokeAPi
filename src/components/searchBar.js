import React from "react";
import { Redirect } from "react-router";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false, value: "" };
    this.setRedirect = this.setRedirect.bind(this);
    this.fasdf = this.fasdf.bind(this);
  }

  setRedirect(event) {
    this.setState({
      value: event.target.value,
    });
  }

  fasdf() {
    const redirect = this.state.redirect;

    if (redirect)
      this.setState({
        redirect: false,
      });

    return (
      redirect && (
        <Redirect
          to={{
            pathname: `/pokemons/${this.state.value}`,
          }}
        />
      )
    );
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          this.setState({
            redirect: true,
          });
        }}
      >
        <input
          type="text"
          value={this.state.value}
          onChange={this.setRedirect}
        />

        {this.fasdf()}
      </form>
    );
  }
}
