'use strict';

import express from 'express'
import bodyParser from 'body-parser'
import config from '../config/config'
import db from '../src/models/index'
import cors from 'cors'

const app = express();
app.config = config;
const router = express.Router();
app.set('port', 3000);

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Carrega as Rotas
import indexRoutes from './routes/index-route'
import MockupRoutes from './routes/mockup-route'
import SockRoutes from './routes/sock-route'
import ShortRoutes from './routes/short-route'
import ShirtRoutes from './routes/shirt-route'
import UniformRoutes from './routes/uniform-route'
import UserRoutes from './routes/user-route'

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', indexRoutes);
// app.use('/mockups', mockupRoutes);

MockupRoutes(app);
SockRoutes(app);
ShortRoutes(app);
ShirtRoutes(app);
UniformRoutes(app);
UserRoutes(app);


export default app;