'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://plamia:facebook89@ds225543.mlab.com:25543/plamia-db', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection err'));
db.once('open', () => {
	console.log("Database connected...");
});

module.exports = db;