var express = require('express');
var app = express();
var units = require('./routes/units');


// Serve all static files in 'public' folder to users
app.use(express.static(__dirname + '/public'));

// app.get('/unit/:id', units.findById);
app.get('/units', units.getUnitList);



// Start server on port 3000
console.log('running on 3000');
app.listen(3000);
