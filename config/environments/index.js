require("dotenv").config();

const production = require("./production")
const qa = require("./qa")
const development = require("./development")
const { NODE_ENV } = process.env

let currentEnv = development 

//preguntamos donde estamos en el entorno de la aplicacion
if (NODE_ENV === "production") {
    currentEnv = production
}else if (NODE_ENV === "qa") {
    currentEnv = qa
}

module.exports = currentEnv //exportamos el entorno de la aplicacion dependiendo del entorno en el que estemos