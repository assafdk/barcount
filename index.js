var express = require('express');
var app = express();

// a convenient variable to refer to the HTML directory
var html_dir = './pages/';

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

/*app.get('/', function(request, response) {
  response.send('Hello World!');
});
*/
// routes to serve the static HTML files

app.get('/', function(req, res) {
	res.sendfile(html_dir + 'index.html');
});

app.get('/index', function(req, res) {
	res.sendfile(html_dir + 'index.html');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
