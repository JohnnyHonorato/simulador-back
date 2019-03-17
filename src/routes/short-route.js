'use strict';

import ShortController from '../controllers/short-controllers'

export default (app) => {
    const shortController = new ShortController();

    app.route('/shorts')
        .get((req, res) => {
            shortController.getAll()
                .then(response => {
                    res.json(response.data)
                });
        })
        .post((req, res) => {
            shortController.add(req.body)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });

    app.route('/shorts/:id')
        .get((req, res) => {
            shortController.getById(req.params)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .delete((req, res) => {
            shortController.delete(req.params)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });
};