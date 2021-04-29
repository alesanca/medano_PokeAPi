import React from 'react';
import axios from 'axios';

const Home = () => {

    state = {
        pokemons: []
      };

      componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
          .then(res => {
            const pokemons = res.data;
            this.setState({ pokemons });
            console.log(pokemons);
          })
      }
      
    return (
        <div>
            <h1> Home</h1>
        </div>
    )
}

export default Home;
