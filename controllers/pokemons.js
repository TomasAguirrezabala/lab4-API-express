const axios = require('axios');
const { request, response } = require('express');

const getPokemons = async (req = request, res = response) => {
  try {
    const { limit = 50, offset = 0 } = req.query;
    const api = process.env.API_KEY;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?api_key=${api}&limit=${limit}&offset=${offset}`);
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
    const api = process.env.API_KEY;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/?api_key=${api}`);
    const pokemon = response.data;
    res.status(200).json(pokemon);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: 'Pokémon no encontrado' });
  }
};

const getAbilitiesLista = async (req = request, res = response) => {
  const {limit, offset } = req.query;
  const api = process.env.API_KEY;
  let query_params = '';
  query_params += limit && `&limit=${limit}`;
  query_params += offset && `&offset=${offset}`;
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/ability/?api_key=123${query_params}`);
    const abilities = response.data;
    const results = abilities.results;
    res.status(200).json(results);
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
