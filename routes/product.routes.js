//importamos router desde express
const { Router } = require('express')
const { findProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller')

const router = Router()

router.get('/', findProduct)
router.post('/', createProduct)
router.patch('/', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = {
    //exporto las rutas al server.js con el nombre productRouter 
    productRouter: router,
}