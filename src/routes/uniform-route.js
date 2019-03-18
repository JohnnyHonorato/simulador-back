'use strict';

import UniformController from '../controllers/uniform-controllers'

export default (app) => {
    const uniformController = new UniformController();

    app.route('/uniforms')
        .get((req, res) => {
            uniformController.getAll()
                .then(response => {
                    res.json(response.data)
                });
        })
        .post((req, res) => {
            uniformController.add(req.body)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });

    app.route('/uniforms/:id')
        .get((req, res) => {
            uniformController.getById(req.params)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .delete((req, res) => {
            uniformController.delete(req.params)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
    app.route('/uniforms/mockups/:id')
        .get((req, res) => {
            uniformController.getByMockup(req.params)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
};