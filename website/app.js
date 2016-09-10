/* Third Party */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
/* Internal */
var mysql = require('./helpers/mysql_util');
app.use(bodyParser.urlencoded(
{
  extended: true,
  parameterLimit: 10000,
  limit: '50mb'
}));
app.use(function (req, res, next)
{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,X-Custom-Header");
  res.header("Cache-Control", "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0");
  next();
});
app.get('/', function (req, res)
{
  console.log(mysql)
  res.send('Hello World')
  mysql.destroy();
})
app.get('/hall', function (req, res)
{
  console.log("In hallllll");
  res.send('Hello World')
})
app.listen(3012, function ()
{
  console.log("Web HOH server listening on port 3012");
});