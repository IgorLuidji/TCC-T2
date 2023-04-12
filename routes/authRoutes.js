const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

const checkNoAuth = require("../helpers/noAuth").checkNoAuth;

router.get('/check', (req, res) => {res.send('OK!')})
router.get('/login', checkNoAuth, AuthController.login)
router.post('/login', checkNoAuth , AuthController.loginPost)
router.get('/cadastro', checkNoAuth , AuthController.register)
router.post('/cadastro', checkNoAuth , AuthController.registerPost)
router.get('/recuperar', checkNoAuth , AuthController.recovery)
router.post('/recuperar', checkNoAuth , AuthController.recoveryPost)
router.get('/nova-senha/:id/:code', checkNoAuth , AuthController.newPassword)
router.post('/nova-senha', checkNoAuth , AuthController.newPasswordPost)
router.get('/logout', AuthController.logout)

module.exports = router