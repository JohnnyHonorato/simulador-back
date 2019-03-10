'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const datasource = require('../config/bd-connection');

let app = express();
const router = express.Router();

// Carrega as Rotas
const indexRoutes = require('./routes/index-route');
const mockupRoutes = require('./routes/mockup-route');

app.datasource = datasource(app);//instancia do banco sincronizado
// const mockups = app.datasource.models.Mockup;;

app.route('/mockups')
  .get((req, res) => {
    Mockup.findAll({})
      .then(result => res.json(result))
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/mockups', mockupRoutes);

module.exports = app;