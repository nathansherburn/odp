var express = require('express');
var app = express();
var units = require('./routes/units');

var CAS = require('cas');
var cas = new CAS({base_url: 'https://my.monash.edu.au/authentication/cas', service: 'http://opendata.eng.monash.edu'});

var casLogin = function(req, res) {
  var ticket = req.param('ticket');
  if (ticket) {
    cas.validate(ticket, function(err, status, username) {
      if (err) {
        // Handle the error
        res.send({error: err});
      } else {
        // Log the user in
        res.send({status: status, username: username});
				next();
      }
		});
	} else {
		res.redirect('https://my.monash.edu.au/authentication/cas/login?service=http://opendata.eng.monash.edu/');
	}
};


// Serve all static files in 'public' folder to users
app.use('/', casLogin, express.static(__dirname + '/public'));

// app.get('/unit/:id', units.findById);
app.get('/units', casLogin, units.getUnitList);



// Start server on port 3000
console.log('running on 3000');
app.listen(3000);
