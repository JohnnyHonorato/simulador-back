'use strict';

import UserController from '../controllers/user-controllers'

export default (app) => {
    const userController = new UserController();

    app.route('/users')
        .get((req, res) => {
            userController.getAll()
                .then(response => {
                    res.json(response.data)
                });
        })
        .post((req, res) => {
            userController.add(req.body)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });

    app.route('/users/:id')
        .get((req, res) => {
            userController.getById(req.params)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .delete((req, res) => {
            userController.delete(req.params)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
};