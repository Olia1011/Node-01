const express = require('express');
const ContactController = require('./contact.controller.js');
const contactRouter = express.Router();

contactRouter.get('/', ContactController.listContacts);
contactRouter.get(
  '/:id',
  ContactController.getById,
  ContactController.validateId,
);
contactRouter.post(
  '/',
  ContactController.validateAddContact,
  ContactController.addContact,
);
contactRouter.put(
  '/:id',
  contactController.validateUpdateContact,
  contactController.updateContact,
  ContactController.validateId,
);
contactRouter.delete(
  '/:id',
  contactController.removeContact,
  ContactController.validateId,
);

module.exports = contactRouter;
