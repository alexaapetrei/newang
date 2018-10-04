var express = require('express');
var server = express();

var options = {

    index: 'index.html'

};
/* Javascript logssss */

server.use('/', express.static('/home/site/wwwroot', options));

server.listen(process.env.PORT);
