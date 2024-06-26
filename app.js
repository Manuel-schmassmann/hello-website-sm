var express = require('express');
var app = express();
app.set('view engine', 'ejs');
const path = require('path');

var port = process.env.PORT || 8080;


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'webpages')));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/webpages/index.html');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});