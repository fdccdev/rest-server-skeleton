const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosRoutePath = '/api/usuarios';

    //Middlewares
    this.middlewares();
    //rutas app
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //Parse info
    this.app.use(express.json());
    //archivos publicos
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosRoutePath, require('../routes/user'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("App running in port", this.port);
    });
  }
}

module.exports = Server;
