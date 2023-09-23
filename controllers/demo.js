const axios = require('axios');
const { request, response } = require('express');

const getPokemons = async (req = request, res = response) => {
  try {
    const { limit = 50, offset = 0 } = req.query;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const pokemons = response.data.results;
    res.status(200).json(pokemons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error inesperado' });
  }
};

const getPokemon = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = response.data;
    res.status(200).json(pokemon);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: 'Pokémon no encontrado' });
  }
};

const getPokemonsType = async (req = request, res = response) => {
  let query_params = '';
  query_params += type && `type=${type}`;
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?${query_params}`);
    const ability = response.data;
    res.status(200).json(ability);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: 'Habilidad no encontrada' });
  }
};

module.exports = {
  getPokemons,
  getPokemon,
  getPokemonsType,
};
