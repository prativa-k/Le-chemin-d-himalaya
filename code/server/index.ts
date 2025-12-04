import Server from "./core/server";

// créer le server
const server = new Server().startServer();

// démarrer le serveur
server.listen(process.env.PORT);