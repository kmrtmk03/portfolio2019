 var express = require('express');
 var app = express();
 var history = require('connect-history-api-fallback');

 app.use(history());

 app.use(express.static(__dirname + "/dist"));

 app.set('port', (process.env.PORT || 8080));
 app.listen(app.get('port'), () => {
 console.log('Derp is running at localhost: 8080');
 }); 


//  // server.js
// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');
// app = express();
// app.use(serveStatic(__dirname + "/dist"));
// var port = process.env.PORT || 5000;
// app.listen(port);
// console.log('server started '+ port);