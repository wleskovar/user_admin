/* Ruteo del Administrador de usuarios */
const express = require('express');
const router = express.Router(); /* Router permiete crear rutas montables y desmontables */

/* el metodo HTTP es llamado desde Router */

const admin_users_controller = require('../controllers/admin_users_controller.js');

/* rutas con controladores */
router.get('/', admin_users_controller.show_users);

/* rutas del registro */
router.get('/register', admin_users_controller.show_register);
router.post('/register', admin_users_controller.alta_register);

/* rutas del login */
router.get('/login', admin_users_controller.show_login);

module.exports = router;