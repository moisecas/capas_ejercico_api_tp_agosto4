const {asClass,createContainer,asFunction,asValue} = require ('awilix'); //ayudan a inyectar dependencias en el contenedor de dependencias de la aplicacion (inyectamos dependencias) y asi podemos usarlas en la aplicacion 
const StartUp = require('./startup');

const config = require('../config'); 

const container = createContainer(); //creamos el contenedor de dependencias
const Server = require('./server'); //importamos el servidor de la aplicacion

const {UserController} = require('../api/controllers'); //importamos los controladores de la aplicacion



container.register({
    app:asClass(StartUp). singleton(), //registramos el contenedor de dependencias 
    server: asClass(Server).singleton() //registramos el servidor de la aplicacion 
})
.register({
    UserController: asClass(UserController).singleton() //registramos el controlador de usuarios 
})


.register({
    route: asFunction(Routes).singleton() //registramos la ruta de la aplicacion
}) 

.register({
    config: asValue(config) //registramos el archivo de configuracion de la aplicacion

})

module.exports = container; //exportamos el contenedor de dependencias  