import React , { Component } from 'react'
import "../assets/css/card.css";
import { Redirect } from "react-router";
import Button from '@material-ui/core/Button';

class PokemonCard extends Component {
    state = {
        name: '',
        image: '',
        index: '',
        redirect: false
    }

    componentDidMount(){
        const { name , url } = this.props;
        const index = url.split('/')[url.split('/').length - 2];
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

        this.setState({
            name,
            image,
            index
        })
    }

    setRedirect = (index) => {
        this.setState({
          redirect: true,
          index: index
        });
      };
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={{
            pathname: `/pokemon/${this.state.index}`,
           }}/>;
        }
      };

    render (){
        return (
            <div className="card-item">
                {this.renderRedirect()}
                <div>
                    <p className="cardIndex">{this.state.index}</p>
                    <p className="cardName">{this.state.name}</p>
                </div>
                <img src={this.state.image} alt="pokemon Image" />
                <Button variant="contained" color="primary" onClick={() => this.setRedirect(`${this.state.index}`)}>Mostrar más</Button>
            </div>
        )
    }
}

export default PokemonCard
