var net = require('net');

var HOST = '127.0.0.1';

var PORT = 3000;

net.createServer(function(socket) {
		console.log('Connected! ' + socket.remoteAddress + ':' + socket.remotePort);

		socket.on('data', function(data) {
			console.log('Data from %s : %s ',socket.remoteAddress, data);
			socket.write('you said "' + data + '"');
		});

		socket.once('close', function() {
			console.log('Closed ' + socket.remoteAddress + ' ' + socket.remotePort);
		});
	}).listen(PORT, HOST);

console.log('server listening on ' + HOST + ':' + PORT);