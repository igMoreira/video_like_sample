/**
 * This modules configures express returning a configured app.
 *
 * Created by isilva on 05/09/17.
 */

const express = require('express');
const app = express();
const expressLogging = require('express-logging');
const logger = require('logops');

const bodyParser = require('body-parser');
const load = require('consign');
const cors = require('cors');

const mongoose = require('mongoose');
const db = require('./database');



module.exports = function () {

    var config = null;
    switch (process.env.NODE_ENV)
    {
        case "dev": config = require('./env/dev'); break;
        case "test": config = require('./env/test'); break;
        default: config = require('./env/dev');
    }

    app.config = config;

    app.set('port', config.appPort);

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(expressLogging(logger));
    app.use(cors());

    mongoose.connect(db(app.config).getDbConnectionString());

    load({cwd:'app'})
        .then('models')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;

};
