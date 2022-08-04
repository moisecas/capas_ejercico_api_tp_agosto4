const {asClass,createContainer,asFunction,asValue} = require ('awilix'); //ayudan a inyectar dependencias en el contenedor de dependencias de la aplicacion (inyectamos dependencias) y asi podemos usarlas en la aplicacion 

const container = createContainer(); //creamos el contenedor de dependencias

module.exports = container; //exportamos el contenedor de dependencias 