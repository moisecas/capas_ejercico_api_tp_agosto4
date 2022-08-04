const express = require('express'); 
class Server{
   constructor({config, router}){
       this._config = config;
       this._router = router;
   }
   start(){
    return new Promise((resolve, reject) => {

   })

   }
}

module.exports = Server;