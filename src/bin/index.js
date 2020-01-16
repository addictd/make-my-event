
var debug = require('debug')('my-application');
const config = require("../../config");
import '../db';
import app from '../app';

app.listen(config.PORT, function () {
  console.log('[Server_started]: ', config.PORT);
});



module.exports = app;