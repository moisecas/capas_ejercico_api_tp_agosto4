const {Router} = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors');



module.exports = function({UserController}){
    const router = Router(); //instanciamos el router de express
    router.get('/', UserController.sayHello); //agregamos la ruta de la api
    
    return router; //retornamos el router de express
}