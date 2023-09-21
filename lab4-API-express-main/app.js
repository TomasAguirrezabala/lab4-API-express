require('dotenv').config();
const axios = require('axios');

const Server = require('./models/server');

const svr = new Server();

svr.listen();

axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
