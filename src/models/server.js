const express = require('express');
const path = require('path');
const method_override = require('method-override')
const app = express();
const public_path = path.join(__dirname, '../../public');
/** Session */
const session = require('express-session');

/* rutas */
const ruta_home = require('../routes/home_route.js');
const ruta_test = require('../routes/test_route.js');
const ruta_admin_users = require('../routes/admin_users_route.js');



class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        
        // Middlewares
        this.middleware();

        // Rutas
        this.routes();
    }

    middleware() {
        // Directorio publico
        this.app.use(express.static(public_path));

        this.app.set('view engine', 'ejs');
        /* seteo donde esta el directorio "views" */
        this.app.set('views',path.join(__dirname, '../views'));

        /* configuracion para poder capturar la informacion de los formularios */
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
        this.app.use(method_override('_method'));
        this.app.use(session({
            secret: 'Secreto',
            resave: 'false',
            saveUninitialized: 'false'
        }));
        
    }
    
    routes() {
        this.app.use('/', ruta_home);
        this.app.use('/home', ruta_home);
        this.app.use('/test', ruta_test);
        this.app.use('/users', ruta_admin_users);
        
        /*=======================================================================*/
        /* Error 404 */ //Nota: este bloque debe ir siempre al final de las rutas
        this.app.use((req, res, next) => {
            res.status(404).render('not_found');
        });
    }

    escuchar() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port)
            console.log('http://localhost:8080')
        });
        
    }

}




module.exports= Server;