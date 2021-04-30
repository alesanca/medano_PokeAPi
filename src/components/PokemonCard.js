import React , { Component } from 'react'
import "../assets/css/card.css";

class PokemonCard extends Component {
    state = {
        name: '',
        image: '',
        index: ''
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

    render (){
        return (
            <div className="card-item">
                <div>
                    <p className="cardIndex">{this.state.index}</p>
                    <p className="cardName">{this.state.name}</p>
                </div>
                <img src={this.state.image} alt="pokemon Image" />
            </div>
        )
    }
}

export default PokemonCard
