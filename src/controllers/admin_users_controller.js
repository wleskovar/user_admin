/* Controlador del Administrador de usuarios*/

const admin_users_controller = {
    show_users: (req, res) => {
        res.render('../views/users');
    },
    show_register: (req, res) => {
        res.render('../views/forms/register_form');
    },
    alta_register: (req, res) => {
        //
    },
    show_login: (req, res) => {
        res.render('../views/forms/login_form');
    }
};

module.exports = admin_users_controller;