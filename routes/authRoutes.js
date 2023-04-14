const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

const checkNoAuth = require("../helpers/noAuth").checkNoAuth;
const asyncHandler = fn => (req, res, next) => {
  return Promise
      .resolve(fn(req, res, next))
      .catch(next);
};

router.get('/check', (req, res) => {res.send('OK!')})
router.get('/login', checkNoAuth, asyncHandler(AuthController.login))
router.post('/login', checkNoAuth , asyncHandler(AuthController.loginPost))
router.get('/cadastro', checkNoAuth , asyncHandler(AuthController.register))
router.post('/cadastro', checkNoAuth , asyncHandler(AuthController.registerPost))
router.get('/recuperar', checkNoAuth , asyncHandler(AuthController.recovery))
router.post('/recuperar', checkNoAuth , asyncHandler(AuthController.recoveryPost))
router.get('/nova-senha/:id/:code', checkNoAuth , asyncHandler(AuthController.newPassword))
router.post('/nova-senha', checkNoAuth , asyncHandler(AuthController.newPasswordPost))
router.get('/logout', asyncHandler(AuthController.logout))

module.exports = router