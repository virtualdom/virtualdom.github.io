var express = require('express');

var app = express();
var num = 0;

app.set('title', 'Dominic Joseph');
app.use('/', express.static(__dirname));
app.use('/alfred', express.static(__dirname + '/alfred.html'));
app.use('/bkgd', function (req, res, next) {
    res.sendFile(__dirname + '/views/img/bkgds/bkdg' + (num % 4 + 1) + '.jpg');
    num++;
});

app.listen(process.env.PORT);