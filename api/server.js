const express = require('express'); 
class Server{
   constructor({config, router}){
       this._config = config;
      
       this._express = express();
       this._express.use(router); //usamos el router de la aplicacion


   }
   start(){
    return new Promise((resolve, reject) => {
        const http = this._express.listen(this._config.PORT, () => {
            const {port} = http.address();
            console.log(`Server running on port ${port}`);
            resolve(); //resolvemos la promesa 
        }); 


   })

   }
}

module.exports = Server;