var WebSocket = require('ws').Server;

var wss = new WebSocket({
	port: 8080//,
//	protocolVersion: 8,
 //	origin: 'http://jaamo.em87.io'
});


/**
 * Connection opened.
 */
wss.on('connection', function(ws) {

	/**
	 * Broadcast every received message.
	 */
    ws.on('message', function(message) {
	    wss.broadcast(message);
    });

});


/**
 * Broadcast method.
 */
wss.broadcast = function(data) {
    console.log("Broadcasting message to " + this.clients.length + " clients: " + data);
    for (var i in this.clients) {
	try {
		this.clients[i].send(data);
	} catch(e) {}
    }
};

