import React , { Component } from 'react'

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
            <div className="card">
                <h1 className="cardIndex">{this.state.index}</h1>
                <img src={this.state.image} alt="pokemon Image" />
                <div className="cardTitle">{this.state.name}</div> 
            </div>
        )
    }
}

export default PokemonCard
