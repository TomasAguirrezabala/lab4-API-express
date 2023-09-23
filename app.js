require('dotenv').config();
const axios = require('axios');

const Server = require('./models/server');

const svr = new Server();

svr.listen();

