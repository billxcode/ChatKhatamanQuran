var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
fs.readFile("client.html","utf-8",function(err,data){
	response.writeHead(200, "text/html");
	response.write(data);
	response.end();
})
}).listen(1337);

var io = require('socket.io').listen(app);
io.sockets.on('message',function(socket){
	socket.on('message_to_server',function(data){
		io.socket.emit('message_to_client',{message:data["message"]});
	})
});