var express = require('express');
var app = express();
app.listen(8000);
app.use(express.static('node_modules'));
app.use(express.static('public'));
// app.use(require('stylus').middleware(__dirname + '/public'));

// add middleware for authontication
// // Handle 404
// app.use(function(req, res) {
//     res.status(400);
//     res.send({ok:'ok'});
// });
//
// // Handle 500
// app.use(function(error, req, res, next) {
//     res.status(500);
//     res.render('500.jade', {title:'500: Internal Server Error', error: error});
// });


