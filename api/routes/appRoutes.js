
'use strict';

module.exports = function(app) {
	var location = require('../controllers/locationController'),
	userHandlers = require('../controllers/userController.js');

	
	app.route('/locations')
		.post(userHandlers.loginRequired, location.save_location);

	app.route('/locations/:id')
		.get(userHandlers.loginRequired, location.list_all_locations)

	app.route('/auth/register')
		.post(userHandlers.register);

	app.route('/auth/login')
		.post(userHandlers.sign_in);
};