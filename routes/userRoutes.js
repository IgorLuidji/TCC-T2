const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

const checkAuth = require("../helpers/auth").checkAuth;

router.get('/', checkAuth.bind(undefined, 'user','read'), UserController.index)
router.get('/novo', checkAuth.bind(undefined, 'user','create'), UserController.create)
router.post('/novo', checkAuth.bind(undefined, 'user','create'), UserController.createPost)
router.get('/editar/:id', checkAuth.bind(undefined, 'user','update'), UserController.edit)
router.post('/editar', checkAuth.bind(undefined, 'user','update'), UserController.editPost)
router.get('/excluir/:id', checkAuth.bind(undefined, 'user','delete'), UserController.delete)
router.post('/excluir', checkAuth.bind(undefined, 'user','delete'), UserController.deletePost)
router.get('/exportar-pdf', checkAuth.bind(undefined, 'user','export'), UserController.exportPdf)
router.get('/exportar-csv', checkAuth.bind(undefined, 'user','export'), UserController.exportCsv)
router.get('/:id', checkAuth.bind(undefined, 'user','read'), UserController.view)

module.exports = router