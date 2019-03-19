'use strict';

import MockupController from '../controllers/mockup-controllers'

export default (app) => {
    const mockupController = new MockupController();

    app.route('/mockups')
        .get((req, res) => {
            mockupController.getAll()
                .then(response => {
                    res.json(response.data)
                });
        })
        .post((req, res) => {
            mockupController.add(req.body)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });

    app.route('/mockups/:id')
        .get((req, res) => {
            mockupController.getById(req.params)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .delete((req, res) => {
            mockupController.delete(req.params)
                .then(response => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        });
    
    
};