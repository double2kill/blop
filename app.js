var express = require('express');
var server = require('http').createServer(app);

var io = require('socket.io')(server);
var port = process.env.PORT || 8008;

var app = express();

app.set('views', './app/views/pages/');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.get('/', function(req, res){ 
// index page
  res.render('index',{ 
    title: 'BBtalk首页'
  })
}); 