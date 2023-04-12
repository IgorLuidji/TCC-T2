const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/IndexController')

const checkAuth = require("../helpers/auth").checkAuth;

router.get('/', checkAuth.bind(undefined, 'index',''), IndexController.index)
router.get('/editar-usuario', checkAuth.bind(undefined, 'index',''), IndexController.editUser)
router.post('/editar-usuario', checkAuth.bind(undefined, 'index',''), IndexController.editUserPost)

module.exports = router