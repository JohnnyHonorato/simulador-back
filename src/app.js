'use strict';

import express from 'express'
import bodyParser from 'body-parser'
import datasource from'../config/bd-connection'
import config from '../config/config'

const app = express();
app.config = config;
app.datasource = datasource(app);
const router = express.Router();
app.set('port', 3000);

// Carrega as Rotas
import indexRoutes from './routes/index-route'
import MockupRoutes from './routes/mockup-route'
import SockRoutes from './routes/sock-route'
import ShortRoutes from './routes/short-route'
import ShirtRoutes from './routes/shirt-route'
import UniformRoutes from './routes/uniform-route'
import UserRoutes from './routes/user-route'

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