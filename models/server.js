const express = require('express');
const cors = require('cors')
class Server{
    
    constructor(){
        this.port = process.env.PORT || 3001;

        this.app = express();
        
        // 1° en Orden
        this.middleware();
        // 2° en Orden
        this.routers();


    }

    middleware(){
        //Probar alguna regla de restricción
        this.app.use(cors());
        
        //Una vez que se configura esta sección publica, NO 
        //es posible utilizar
        this.app.use(express.static('public'));

        const API_KEY = process.env.API_KEY;
        app.use((req, res, next) => {
        const passedKey = req.headers['x-api-key'] || req.query.api_key;

        if (passedKey === API_KEY) {
            next(); // Si la API_KEY es válida, continúa con la solicitud
        } else {
            res.status(401).json({ error: 'Unauthorized' }); // Si la API_KEY no es válida, retorna un error 401
        }
        });

    }

    routers(){
        /* this.app.get('/', function (req, res) {
            res.send('Home');
        }); */

        this.app.use('/api/v1/pokemons', require('../routes/pokemons'));

        this.app.all('*', (req, res) => {
            res.status(404).json({message:'404 Page Not Found'})
        })
    }


    listen(){
        this.app.listen(this.port, () =>{    
            console.log(`App escuchando en el puerto ${this.port}`);
        });
    }

}

module.exports = Server;
