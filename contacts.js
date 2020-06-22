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
    const remove = JSON.parse(
      await fsPromises.writeFile("./db/contacts.json", "utf-8")
    ).filter((contact) => contact.id !== id);
    return console.log(remove);
  } catch (error) {
    throw error;
  }
}

async function addContact(name, email, phone) {  
    try{
      const list = {
        name: name,
        email:email,
        phone:phone
      }
      console.log(list);
      await fsPromises.writeFile("./db/contacts.json", JSON.stringify([...contactsPath, list]));
    
    } catch (err) {
      throw err;
    }
  }

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};