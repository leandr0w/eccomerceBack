const express = require('express')
const cors = require('cors')
const { db } = require('../database/db')
const { productRouter } = require('../routes/product.routes')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.paths = {
            user: 'api/v1/user',
            products: 'api/v1/product'
        }
        this.database()
        this.middlewares()
        this.routes()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json()) 
    }
    routes(){
        this.app.use(this.paths.products, productRouter)
    }
    database(){
        db.authenticate()
        .then(() => console.log('Database authenticated'))
        .catch((err) => console.log(err))
        db.sync()
        .then(() => console.log('Database synced'))
        .catch((err) => console.log(err))
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port)
        })
    }
}
module.exports = Server