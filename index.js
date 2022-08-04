const container = require('./api/container'); //importamos el contenedor de dependencias

const application = container.resolve("app"); //resolvemos el contenedor de dependencias 

application.start().catch(err => {
    console.log(err);
    process.exit();
}); //iniciamos la aplicacion