const fs = require("fs");
const path = require("path");
const { promises: fsPromises } = fs;

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fsPromises.readFile("./db/contacts.json", "utf-8");
    return console.log(contacts);
  } catch (error) {
    throw error;
  }
}

async function getContactById(id) {
  try {
    const getContactId = JSON.parse(
      await fsPromises.readFile("./db/contacts.json", "utf-8")
    ).find((contact) => contact.id === id);
    return console.log(getContactId);
  } catch (error) {
    throw error;
  }
}

async function removeContact(id) {
  try {
    const contactsItems = JSON.parse(
      await fsPromises.readFile("./db/contacts.json", "utf-8")
    ).filter((contact) => contact.id !== id);
    return console.log(contactsItems);
  } catch (error) {
    throw error;
  }
}

async function addContact(name, email, phone) {
  try {
    const contactsList = JSON.parse(
      await fsPromises.readFile("./db/contacts.json", "utf-8")
    );
 
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};