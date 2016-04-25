var net = require('net');
var HOST = '127.0.0.1';
var PORT = 3000;

var client = new net.Socket();

client.connect(PORT, HOST, ()=>{
	console.log('connected to: ' + HOST + ':' + PORT);
	client.write('I am CLient');
});

client.on('data', (data)=>{
	console.log('DATA: ' + data);
	client.destroy();
});

client.on('close', ()=>{
	console.log('connection closed!');
});