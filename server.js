const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRouter = require('./api/contacts.router');
const morgan = require('morgan');
require('dotenv').config();

module.exports = class ContactsServer {
  constructor() {
    this.server = null;
  }

  async start() {
    this.initServer();
    this.initMiddlewares();
    this.initRoutes();
    await this.initDatabase();
    this.startListening();
  }

  initServer() {
    this.server = express();
  }

  initMiddlewares() {
    this.server.use(express.json());
    this.server.use(morgan('tiny'));
    this.server.use(cors({ origin: 'http://localhost:3000' }));
  }

  initRoutes() {
    this.server.use('/', contactRouter);
  }

  async initDatabase() {
    await mongoose.connect(process.env.MONGODB_URL);
  }

  startListening() {
    const PORT = process.env.PORT;
    this.server.listen(PORT, () => {
      console.log('Server started', PORT);
    });
  }
};
