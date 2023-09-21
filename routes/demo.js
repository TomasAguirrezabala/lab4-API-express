const { Router } = require('express');
const { getPokemons, getPokemon, getAbilities } = require('../controllers/demo');

const rutas = Router();

rutas.get('/Pokemons', getPokemons);
rutas.get('/Pokemon/:id', getPokemon);
rutas.get('/Abilities', getAbilities);

module.exports = rutas;