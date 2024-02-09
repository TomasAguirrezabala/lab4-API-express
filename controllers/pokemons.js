const axios = require('axios');
const { request, response } = require('express');

const getPokemons = async (req = request, res = response) => {
    const { limit = 50, offset = 0} = req.query;
    try { 
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const pokemons = response.data.results;

        var listaPokemones = [];
        pokemons.forEach(pokemon => {
            const idP = parseInt(pokemon.url.match(/\/(\d+)\/$/)[1]);
            const nameP = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            listaPokemones.push({id:idP, name:nameP});
        });

        res.status(200).json(listaPokemones)
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error inesperado' });
    }
};

const getPokemon = async (req = request, res = response) => {
    try {
    const {id} = req.params;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = response.data;

    const pokemon = {
                        id: data.id,
                        name: data.name.charAt(0).toUpperCase()+ data.name.slice(1),
                        type: [],
                        region: "Kanto"
                    };

    data.types.forEach(typeData=>{
        let nombreTipo = typeData.type.name; 
        nombreTipo = nombreTipo.charAt(0).toUpperCase()+ nombreTipo.slice(1)
        pokemon.type.push(nombreTipo);
    });

    res.status(200).json(pokemon);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: 'Pokémon no encontrado' });
    }
};

const getAbilitiesLista = async (req = request, res = response) => {
  const {limit, offset} = req.query;
  let query_params = '';
  query_params += limit && `limit=${limit}`;
  query_params += offset && `&offset=${offset}`;
  try {   
    const response = await axios.get(`https://pokeapi.co/api/v2/ability?${query_params}`);
    const abilities = response.data;
    const results = abilities.results;
    res.status(200).json(results); 
  } 
  catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error inesperado' });
  }
};

module.exports = {
  getPokemons,
  getPokemon,
  getAbilitiesLista,
};
