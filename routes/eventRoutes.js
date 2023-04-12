const express = require('express')
const router = express.Router()
const EventController = require('../controllers/EventController')

const checkAuth = require("../helpers/auth").checkAuth;

router.get('/', checkAuth.bind(undefined, 'event','read'), EventController.index)
router.get('/congresso/:congress/novo', checkAuth.bind(undefined, 'event','create'), EventController.create)
router.post('/congresso/:congress/novo', checkAuth.bind(undefined, 'event','create'), EventController.createPost)
router.get('/editar/:id', checkAuth.bind(undefined, 'event','update'), EventController.edit)
router.post('/editar', checkAuth.bind(undefined, 'event','update'), EventController.editPost)
router.get('/excluir/:id', checkAuth.bind(undefined, 'event','delete'), EventController.delete)
router.post('/excluir', checkAuth.bind(undefined, 'event','delete'), EventController.deletePost)
router.get('/inscricoes/:id', checkAuth.bind(undefined, 'event','update'), EventController.subscription)
router.post('/inscricoes', checkAuth.bind(undefined, 'event','update'), EventController.subscriptionPost)
router.get('/participacao/:id', checkAuth.bind(undefined, 'event','update'), EventController.participation)
router.post('/participacao', checkAuth.bind(undefined, 'event','update'), EventController.participationPost)
router.get('/exportar-pdf', checkAuth.bind(undefined, 'event','export'), EventController.exportPdf)
router.get('/congresso/:congress/exportar-csv', checkAuth.bind(undefined, 'event','export'), EventController.exportCsv)
router.get('/congresso/:congress/exportar-pdf', checkAuth.bind(undefined, 'event','export'), EventController.exportPdf)
router.get('/exportar-csv', checkAuth.bind(undefined, 'event','export'), EventController.exportCsv)
router.get('/:id', checkAuth.bind(undefined, 'event','read'), EventController.view)

module.exports = router