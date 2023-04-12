const helpers = require("../helpers/helpers");
const nameController ={
  profile: {
    'profile':true,
    'name' : 'Perfil',
    'route': '/perfil',
  },
  user: {
    'user':true,
    'name' : 'Usuário',
    'route': '/usuario',
  },
  congress: {
    'congress':true,
    'name' : 'Congresso',
    'route': '/congresso',
  },
  event: {
    'event':true,
    'name' : 'Meus Eventos',
    'route': '/meus-eventos',
  },
  event_public: {
    'event_public':true,
    'name' : 'Eventos',
    'route': '/eventos',
  },
}
module.exports = class BaseController {

  static async dataController(req, res, name) {
    const userId = req.session.userid
    let controller = {};
    controller['user'] = await helpers.getUser(userId);
    controller['permission'] = await helpers.getPermission(userId);
    if (nameController[name]){
      controller['route'] = nameController[name];
    }
    return controller;
  }

}
