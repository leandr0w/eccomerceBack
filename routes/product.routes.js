const { Router } = require('express')
const { findProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller')

const router = Router()

router.get('/', findProduct)
router.post('/', createProduct)
router.patch('/', updateProduct)
router.delete('/', deleteProduct)

module.exports = {
    productRouter: router,
}