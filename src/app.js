'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('../config/bd-connection');

const app = express();
const router = express.Router();

// Carrega as Rotas
const indexRoutes = require('./routes/index-route');
const mockupRoutes = require('./routes/mockup-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/mockups', mockupRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;