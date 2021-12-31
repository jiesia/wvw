import express, { Express } from 'express';
import http, { Server as HTTPServer } from 'http';

class Server {
  app: Express;
  server: HTTPServer;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
  }

  static(root: string) {
    this.app.use(express.static(root));
  }

  use() {

  }

  listen(port: number = 8000) {
    this.server.listen(port);
  }
}

export default Server;
