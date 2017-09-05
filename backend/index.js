/**
 * Application entry point.
 *
 * Created by isilva on 05/09/17.
 */

const http = require('http');
const app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express Server is listenning on port ' + app.get('port'));
});