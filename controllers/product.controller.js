exports.findProduct = (req, res) => {
    console.log(req)
    res.json({
        status: 'success',
        message: 'ROUTE - GET'
    })
}
exports.createProduct = (req, res) => {
    console.log(req)
    res.json({
        status: 'success',
        message: 'ROUTE - POST'
    })
}
exports.updateProduct = (req, res) => {
    console.log(req)
    res.json({
        status: 'success',
        message: 'ROUTE - PATCH'
    })
}
exports.deleteProduct = (req, res) => {
    console.log(req)
    res.json({
        status: 'success',
        message: 'ROUTE - DELETE'
    })
}
