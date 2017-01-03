
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('app'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/app/HomePage', express.static(__dirname + '/app/HomePage'));
app.use('/app/AboutUs', express.static(__dirname + '/app/AboutUs'));
app.use('/app/Profile', express.static(__dirname + '/app/Profile'));
app.use('/app/styles', express.static(__dirname + '/app/styles'));
app.use('/app/UpcomingEvents', express.static(__dirname + '/app/UpcomingEvents'));
app.use('/app/Authentication', express.static(__dirname + '/app/Authentication'));
app.get('/', (req, res) => {
   res.sendFile(getFullPath('index.html'));
});

var port = process.env.PORT || 4200;

app.listen(port, () => {
  console.log('App listening on port ' + port);
});


//////////////////

function getFullPath(name) {
   return path.join(__dirname + '/app/' + name);
}