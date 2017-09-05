/**
 * This modules configures express returning a configured app.
 *
 * Created by isilva on 05/09/17.
 */

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const load = require('consign');

const mongoose = require('mongoose');
const db = require('./database');



module.exports = function () {

    var config = null;
    switch (process.env.LIKE_ENV)
    {
        case "dev": config = require('./env/dev'); break;
        case "prod": config = require('./env/prod'); break;
        default: config = require('./env/dev');
    }

    app.config = config;

    app.set('port', config.appPort);

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    mongoose.connect(db(app.config).getDbConnectionString());

    load({cwd:'app'})
        .then('models')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;

};