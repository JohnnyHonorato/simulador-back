'use strict';

import SockController from '../controllers/sock-controllers'

export default (app) => {
    const sockController = new SockController();

    app.route('/socks')
        .get((req, res) => {
            sockController.getAll()
                .then(response => {
                    res.json(response.data)
                });
        })
        .post((req, res) => {
            sockController.add(req.body)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });

    app.route('/socks/:id')
        .get((req, res) => {
            sockController.getById(req.params)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .delete((req, res) => {
            sockController.delete(req.params)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });
};