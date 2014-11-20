var mongo = require('mongodb');

var Server = mongo.Server,
		Db = mongo.Db,
		BSON = mongo.BSONPure;

var server = new Server ('localhost', 27017, {auto_reconnect: true});
db = new Db('odp', server, {w:1});

// Connect to database and populate if needed
db.open(function (err, db) {
	if(!err) {
		console.log('Connected to \'units\' in \'odp\' database');
		db.collection('units', {strict:true}, function(err, collection) {
			if (err) {
				console.log('the units collection does not exist yet... Ill try to make one now');
				populate();
			}
		});
	}
});



exports.getUnitList = function(req, res) {
	db.collection('units', function (err, collection) {
		collection.find().toArray(function(err, items) {
			res.send(items);
		});
	});
};


exports.findById = function(req, res) {
	var id = req.params.id;
	db.collection('units', function (err, collection) {
		collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
			res.send(item);
		});
	});
};


// populate the database with sample data
var populate = function() {
 
	 var units = [
		 {
			 name: 'ENG1030 - Electrical Systems',
			 grades: { F: 19,	C: 21, D: 38, HD: 22 },
			 lecturer: {
				 name: 'Jonathan Li' ,
				 linkedIn: 'linkedin.com/?user=jonathan_li',
				 description: 'This description will be stolen from the handbook'
			 },
			 setu: {objectives: 4.1, stimulating: 2.0, resources: 2.8, feedback: 1.5, quality: 2.6 },
			 wordCloud: ['word', 'another', 'hello', 'what']
		 },

		 {
			 name: 'ENG1060 - Computing for Engineers',
			 grades: { F: 17,	C: 23, D: 34, HD: 26 },
			 lecturer: {
				 name: 'Wai Ho Li' ,
				 linkedIn: 'linkedin.com/?user=wai_ho_li',
				 description: 'This description of Wai Ho Li will be stolen from the handbook'
			 },
			 setu: {objectives: 2.2, stimulating: 4.4, resources: 3.8, feedback: 4.5, quality: 4.6 },
			 wordCloud: ['word', 'another', 'hello', 'what']
		 },

		 {
			 name: 'ENG1020 - Engineering Structures',
			 grades: { F: 27,	C: 20, D: 30, HD: 23 },
				 lecturer: {name: 'Michael Bambach',
				 linkedIn: 'linkedin.com/?user=mike_bambach',
				 description: 'This mike bambach description will be stolen from the handbook'
			 },
			 setu: {objectives: 4.3, stimulating: 1.5, resources: 4.8, feedback: 3.5, quality: 1.6 },
			 wordCloud: ['word', 'another', 'hello', 'what']
		 }
	 ];
	 
	db.collection('units', function(err, collection) {
		collection.insert(units, {safe:true}, function(err, result) {});
	});
	 
};
