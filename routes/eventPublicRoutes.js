const express = require('express')
const router = express.Router()
const EventPublicController = require('../controllers/EventPublicController')

const checkAuth = require("../helpers/auth").checkAuth;

router.get('/congresso/:id_congress', EventPublicController.congress)
router.get('/congresso/:id_congress/pagina/:id_event', EventPublicController.page)
router.get('/inscricao/:id_event', checkAuth.bind(undefined, 'index',''), EventPublicController.subscription)
router.post('/inscricao/:id_event', checkAuth.bind(undefined, 'index',''), EventPublicController.subscriptionPost)
router.get('/certificado/:id_event', checkAuth.bind(undefined, 'index',''), EventPublicController.certificate)
router.get('/avaliar/:id_event', checkAuth.bind(undefined, 'index',''), EventPublicController.assessment)
router.get('/cancelar/:id_event', checkAuth.bind(undefined, 'index',''), EventPublicController.cancel)
router.post('/cancelar', checkAuth.bind(undefined, 'index',''), EventPublicController.cancelPost)
router.get('/', checkAuth.bind(undefined, 'index',''), EventPublicController.index)

module.exports = router