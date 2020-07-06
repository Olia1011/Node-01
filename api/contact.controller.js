const Joi = require("joi");
const modelMongoose = require("./contact.model");
const {
  Types: { ObjectId },
} = require("mongoose");


class ContactController {
  async listContacts(req, res, next) {
    try {
      const contacts = await modelMongoose.find();
      return res.status(200).json(contacts);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) { 
    try{
    const id = req.params.id;
    const targetContact = await modelMongoose.findById(id);
    if (!targetContact) {
      return res.status(404).send("Not found");
    }
    console.log(targetContact);
    return res.status(200).send(targetContact);
  }catch (err) {
    next(err);
  }
}

  async addContact(req, res, next) {
    try{
    const newContact = await modelMongoose.create(req.body);
    return res.status(201).json(newContact);
  }catch (err){
    next(err);
  }
}

  validateAddContact(req, res, next) {
    const addContactRules = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      phone: Joi.string().required(),
      subscription: Joi.string().required(),
      password: Joi.string().required(),
    });

    const result = addContactRules.validate(req.body);
    if (result.error) {
      return res.status(400).send("missing required name field");
    }
    next();
  }

  async UpdateContact(req, res, next) {
    try{
    const contactId = req.params.id;
    const contactToUpdate = await modelMongoose.findByIdAndUpdate(
      contactId,
       req.body,
    // {
    //   new: true,
    // }
    );
    console.log(contactToUpdate);
    if(!contactToUpdate){
      return res.status(404).send()
    }
    return res.starus(204).send();
  }catch (err){
    next(err)
  }
}

  validateUpdateContact(req, res, next) {
    const updateContactRules = Joi.object({
      name: Joi.string(),
      email: Joi.string(),
      phone: Joi.string(),
      subscription: Joi.string(),
      password: Joi.string(),
    });

    const result = updateContactRules.validate(req.body);
    if (result.error) {
      return res.status(400).send("missing fields");
    }
    next();
  }

  validateId(req, res, next) {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send("Not found");
    }
    next();
  }

  async removeContact(req, res, next) {
    try{
      const contactId = req.params.id;
      const deleteContact = await modelMongoose.findByIdAndDelete(contactId);
      if(!deleteContact) {
        return res.status(404).send();
      }
      return res.status(204).send();
    } catch (err){
      next(err);
    }
  }
}
//   findContactIndexById(res, contactId) {
//     const id = parseInt(contactId);
//     const targetContactIndex = contactsPath.findIndex(
//       (contact) => contact.id === id
//     );
//     if (targetContactIndex === -1) {
//       return res.status(404).send("Not found"); 
//     }
//     return targetContactIndex;
//   }
// }

module.exports = new ContactController();