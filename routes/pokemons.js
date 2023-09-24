const { Router } = require('express');
const { getPokemons, getPokemon, getAbilitiesLista } = require('../controllers/pokemons');

const rutas = Router();

rutas.get('/Pokemons', getPokemons);
rutas.get('/Pokemon/:id', getPokemon);
rutas.get('/Abilities', getAbilitiesLista);

module.exports = rutas;