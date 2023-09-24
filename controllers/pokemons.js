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

const getAbilitiesLista = async (req = request, res = response) => {
  const {limit, offset } = req.query;
  let query_params = '';
  query_params += limit && `limit=${limit}`;
  query_params += offset && `&offset=${offset}`;
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/ability/?${query_params}`);
    const ability = response.data.results;
    res.status(200).json(ability);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error inesperado' });
  }
};

module.exports = {
  getPokemons,
  getPokemon,
  getAbilitiesLista,
};
