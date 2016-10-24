Super simple websocket echo server. It just allows connections and broadcasts all messages to all clients. Doesn't provide any security - not ready for production use.

Install:
```npm install```

Run:  
```node app.js```

Run node with Docker:  
```docker run -it --rm -p 8080:8080 -v $(pwd):/app node:latest bash```
