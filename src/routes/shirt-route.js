'use strict';

import ShirtController from '../controllers/short-controllers'

export default (app) => {
    const shirtController = new ShirtController();

    app.route('/shirts')
        .get((req, res) => {
            shirtController.getAll()
                .then(response => {
                    res.json(response.data)
                });
        })
        .post((req, res) => {
            shirtController.add(req.body)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });

    app.route('/shirts/:id')
        .get((req, res) => {
            shirtController.getById(req.params)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .delete((req, res) => {
            shirtController.delete(req.params)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });
};