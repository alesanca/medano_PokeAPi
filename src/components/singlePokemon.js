import { render } from '@testing-library/react';
import axios from 'axios';
import React from 'react'

export default class SinglePokemon extends React.Component {

    state = {
        name: '',
        index: '',
        url: '',
        type: ''
    };

    async componentDidMount() {
        const { pokeIndex } = this.props.match.params;

        console.log(pokeIndex);

        const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}/`;
        
        const res = await axios.get(pokeUrl);
        const name = res.data.name;
        const image = res.data.sprites.front_default;
        const types = res.data.types.map(i => i.type.name);

        this.setState({name , pokeIndex , pokeUrl , types});
      }

      render(){
          return (
              <div className="pokemonInfo">
                  <div className="topInfo">
                    <p>{this.state.index}</p>
                    <p>{this.state.name}</p>
                </div>
              </div>
          )
      }
}
