const express = require('express')
const router = express.Router()
const ProfileController = require('../controllers/ProfileController')

const checkAuth = require("../helpers/auth").checkAuth;

router.get('/', checkAuth.bind(undefined, 'profile','read'), ProfileController.index)
router.get('/novo', checkAuth.bind(undefined, 'profile','create'), ProfileController.create)
router.post('/novo', checkAuth.bind(undefined, 'profile','create'), ProfileController.createPost)
router.get('/editar/:id', checkAuth.bind(undefined, 'profile','update'), ProfileController.edit)
router.get('/editar/', checkAuth.bind(undefined, 'profile','update'), ProfileController.edit)
router.post('/editar', checkAuth.bind(undefined, 'profile','update'), ProfileController.editPost)
router.get('/excluir/:id', checkAuth.bind(undefined, 'profile','delete'), ProfileController.delete)
router.post('/excluir', checkAuth.bind(undefined, 'profile','delete'), ProfileController.deletePost)
router.get('/exportar-pdf', checkAuth.bind(undefined, 'profile','export'), ProfileController.exportPdf)
router.get('/exportar-csv', checkAuth.bind(undefined, 'profile','export'), ProfileController.exportCsv)
router.get('/:id', checkAuth.bind(undefined, 'profile','read'), ProfileController.view)

module.exports = router