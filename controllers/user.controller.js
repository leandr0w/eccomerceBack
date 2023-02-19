exports.findUsers = (req, res) => {
    res.json({
        status: 'success',
        message: 'ROUTE - get'
    })
}
exports.findUser = (req, res) => {
    res.json({
        status: 'success',
        message: 'ROUTE - get'
    })
}
exports.createUser = (req, res) => {
    res.json({
        status: 'success',
        message: 'ROUTE - post'
    })
}
exports.updateUser = (req, res) => {
    res.json({
        status: 'success',
        message: 'ROUTE - patch'
    })
}
exports.deleteUser = (req, res) => {
    res.json({
        status: 'success',
        message: 'ROUTE - delete'
    })
}