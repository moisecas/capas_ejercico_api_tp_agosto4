class UserController{

    constructor(){} 

    sayHello(req, res){
        return res.send('Hello World');
    }
}

module.exports = UserController; //exportamos el contenedor de dependencias 