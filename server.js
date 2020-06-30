const express = require("express");
const cors = require("cors");
const contactRouter = require("./api/contacts.router");
const morgan = require("morgan");
require("dotenv").config();

module.exports = class ContactsServer {
  constructor() {
    this.server = null;
  }

  start() {
    this.initServer();
    this.initMiddlewares();
    this.initRoutes();
    this.startListening();
  }

  initServer() {
    this.server = express();
  }

  initMiddlewares() {
    this.server.use(express.json());
    this.server.use(morgan("tiny"));
    this.server.use(cors({ origin: "http://localhost:3000" }));
  }

  initRoutes() {
    this.server.use("/", contactRouter);
  }

  startListening() {
    this.server.listen(process.env.PORT, () => {
      console.log("Server started", process.env.PORT);
    });
  }
};