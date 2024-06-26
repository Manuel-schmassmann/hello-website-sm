var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/toc', function(req, res) {
    res.render('toc');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});