import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([])

        //useEffect is in place of ComponentDidUpdate, unmount, didmount ,etc.
    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                setPokemon(res.data.results)
            })

        return () => { // acts as componentWillUnmount
            console.log('goodbye')
        }
    }, []) // an empty array acts as componentDidMount

    return <div>{JSON.stringify(pokemon)}</div>
}

export default PokemonList;