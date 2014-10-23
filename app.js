var express = require('express');

var app = express();

app.set('title', 'Dominic Joseph');
app.use(express.static(__dirname));

app.listen(process.env.PORT);