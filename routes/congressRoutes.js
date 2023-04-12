const express = require('express')
const router = express.Router()
const CongressController = require('../controllers/CongressController')

const checkAuth = require("../helpers/auth").checkAuth;

router.get('/', checkAuth.bind(undefined, 'congress','read'), CongressController.index)
router.get('/novo', checkAuth.bind(undefined, 'congress','create'), CongressController.create)
router.post('/novo', checkAuth.bind(undefined, 'congress','create'), CongressController.createPost)
router.get('/editar/:id', checkAuth.bind(undefined, 'congress','update'), CongressController.edit)
router.post('/editar', checkAuth.bind(undefined, 'congress','update'), CongressController.editPost)
router.get('/excluir/:id', checkAuth.bind(undefined, 'congress','delete'), CongressController.delete)
router.post('/excluir', checkAuth.bind(undefined, 'congress','delete'), CongressController.deletePost)
router.get('/exportar-pdf', checkAuth.bind(undefined, 'congress','export'), CongressController.exportPdf)
router.get('/exportar-csv', checkAuth.bind(undefined, 'congress','export'), CongressController.exportCsv)
router.get('/:id', checkAuth.bind(undefined, 'congress','read'), CongressController.view)

module.exports = router