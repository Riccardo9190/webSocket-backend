# WebSocket Back-End

API for [WebSocket Front-End](https://github.com/Riccardo9190/webSocket-frontend). Includes HTTP and WebSocket protocols.

The WebSocket protocol has bidirectional communication, permitted after a 'handshake' performed following a client request.

<img src="https://github.com/Riccardo9190/webSocket-backend/blob/master/public/websocket_vs_http.png"/>

### Technologies Used:

- Node.js
- Express
- MongoDB
- [Socket.io](https://socket.io/)


### To Run Locally

To run locally you need to have [MongoDB](https://docs.mongodb.com/manual/installation/) installed and running on your machine.
Once you have your MongoDB service running you can do the following steps:

- Clone this repository with ```git clone https://github.com/Riccardo9190/webSocket-backend.git```

- Access the app folder with ```cd webSocket-backend```

- Install all dependencies with ```npm install```

- Set the environment variable for the database with:

```shell
echo "DATABASE_URL=mongodb://localhost:27017/your_database_name" > .env
```

- Set the environment variable to connect with [WebSocket Front-End](https://github.com/Riccardo9190/webSocket-frontend):
```shell
echo "FRONTEND_URL=http://localhost:5173" >> .env
```

- Run the app with ```npm run dev``` and open the URL ```localhost:5000```
