import React from "react";
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router";

export default class SearchBar extends React.Component {
    
    state = {
        value: '',
        redirect: false
    }

    setRedirect = (value) => {
        this.setState({
          redirect: true,
          value: value
        });
      };
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={{
            pathname: `/pokemon/filtered/${this.state.value}`,
           }}/>;
        }
      };

    render() {
      return (
        <form>
          <input type="text" value={this.state.value} onChange={() => this.setRedirect(`${this.state.value}`)} />
          <Button variant="contained" color="primary" onChange={() => this.setRedirect(`${this.state.value}`)}>Mostrar más</Button>
        </form>
      );
    }
  }