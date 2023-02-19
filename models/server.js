const express = require('express')
const cors = require('cors')
const { db } = require('../database/db')
const { productRouter } = require('../routes/product.routes')
const { usersRouter } = require('../routes/user.routes')

class Server {
    constructor(){
        //siempre utilizar this para hacer referencia a la clase en la que estamos
        //inicializar express
        this.app = express()
        //inicializar el puerto
        this.port = process.env.PORT
        
        this.paths = {
            user: 'api/v1/user',
            products: 'api/v1/product'
        }
        //siempre llamar el metodo de conexion a la base de datos antes de los middlewares
        this.database()
        this.middlewares()
        //invocar las rutas
        this.routes()
    }
    middlewares(){
        //se utilizan las cors como seguridad para permitir o denegar acceso al servidor
        this.app.use(cors())
        //me permite que en la request vengan json
        this.app.use(express.json()) 
    }
    //routes metodo donde van las rutas 
    routes(){
        //importamos las rutas desde la carpeta routes
        this.app.use(this.paths.products, productRouter)
        this.app.use(this.paths.user, usersRouter)
    }
    database(){
        //importamos db desde database y esto devuelve una promesa que resolvemos con then y catch
        db.authenticate()
        .then(() => console.log('Database authenticated'))
        .catch((err) => console.log(err))
        db.sync()
        .then(() => console.log('Database synced'))
        .catch((err) => console.log(err))
    }
    //metodo para escuchar al servidor
    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port)
        })
    }
}
module.exports = Server