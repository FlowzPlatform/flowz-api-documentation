const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { PORT } = require('./config.js');



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.set('port', PORT);

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
  console.log('swagger documentation available on http://localhost:' + port + '/api-docs');
});