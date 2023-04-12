const sequelize = require("sequelize");
const User = require('../models/User')
const Permission = require('../models/Permission')
const BaseController = require('./BaseController')

module.exports = class ReportController extends BaseController {
  static async index(req, res) {
    let controller =  await super.dataController(req, res);
    req.flash('message', 'Essa funcionalidade ainda não está disponível nessa versão.')
    req.session.save(() => {
      res.redirect('/')
    })
    return
  }
}