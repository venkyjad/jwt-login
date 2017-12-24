
'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/locationController'),
	userHandlers = require('../controllers/userController.js');

	
	app.route('/locations')
		.get(userHandlers.loginRequired, todoList.list_all_locations)
		.post(userHandlers.loginRequired, todoList.save_location);

	app.route('/auth/register')
		.post(userHandlers.register);

	app.route('/auth/login')
		.post(userHandlers.sign_in);
};