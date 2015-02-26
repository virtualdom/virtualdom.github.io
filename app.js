var express = require('express');

var app = express();

app.set('title', 'Dominic Joseph');
app.use('/', express.static(__dirname));
app.use('/alfred', express.static(__dirname + '/alfred.html'));

app.listen(process.env.PORT);