const {Router} = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors'); 
const compression = require('compression'); 


module.exports = function({UserRoutes}){
    const router = require('express').Router();
    const apiRoute = Router();
    
    apiRoute.use(cors()).use(bodyParser.json()).use(compression); //agregamos las cabeceras de la api

    apiRoute.use("/user", UserRoutes); //agregamos la ruta de la api
    router.use('/api', apiRoute); //agregamos la ruta de la api

    return router; //retornamos el router de express

}
