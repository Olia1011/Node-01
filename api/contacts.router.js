const express = require("express");
const ContactController = require("./contact.controller.js");


const contactRouter = express.Router();

contactRouter.get("/", ContactController.listContacts);
contactRouter.get("/:id", ContactController.getById);
contactRouter.post(
  "/",
  ContactController.validateAddContact,
  ContactController.addContact
);
contactRouter.put(
  "/:id",
  contactController.validateUpdateContact,
  contactController.updateContact
);
contactRouter.delete("/:id", contactController.removeContact);

module.exports = contactRouter;