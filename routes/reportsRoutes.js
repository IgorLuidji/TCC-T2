const express = require('express')
const router = express.Router()
const ReportsController = require('../controllers/ReportsController')

const checkAuth = require("../helpers/auth").checkAuth;

router.get('/', checkAuth.bind(undefined, 'reports','read'), ReportsController.index)

module.exports = router