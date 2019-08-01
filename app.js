// module.exports = (req, res) => {
//   res.end(`Hi!`)
// }

// const express = require('express');

// var connect = require("connect");

// var app = connect().use(connect.static(__dirname + '/build'));

// app.listen(8180);

// app.use(express.static('./build'));

// app.listen(process.env.PORT, function () {
// });

var connect = require('connect');
var serveStatic = require('serve-static'); 
var app = connect(); 

app.use(serveStatic('./build')); 
app.listen();
