'use strict';

import MockupController from '../controllers/mockup-controllers'

export default (app) => {
    const mockupController = new MockupController(app.datasource.models.Mockup);
    app.route('/mockups')

    .get((req, res) => {
        mockupController.getAll()
        .then(response => {
            res.json(response.data)
        });
    });
    
};