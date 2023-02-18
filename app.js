require('dotenv').config()
//importar la clase server que viene desde server.js
const Server = require('./models/server')
//instanciamos la clase Server 
const server = new Server()
//hacemos que la app escuche al servidor con el metodo listen
server.listen()