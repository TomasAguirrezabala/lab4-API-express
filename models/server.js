const express = require('express');
const cors = require('cors')
const url = require('url');
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

        const validateApiKey = () => (req, res) => {
            // Obtén la URL completa de la solicitud
            const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
            // Analiza la URL para obtener sus componentes, incluyendo la consulta
            const parsedUrl = new URL(fullUrl);
            // Extrae el valor del parámetro 'api_key' de la consulta
            const passedKey = parsedUrl.searchParams.get('api_key');
            if (passedKey === process.env.API_KEY) {
              return res.status(200).json({ mensaje: "Clave válida" });
            } else {
              return res.status(401).json({ mensaje: "Clave no válida" });
            }         
};

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
