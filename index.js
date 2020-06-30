const argv = require("yargs").argv;
const express = require("express");
const Joi = require("joi");
const uuid = require("uuid");
const morgan = require('morgan')
const PORT = 3000;

const argv = yargs
    .number("id")
    .string("name")
    .string("email")
    .alias("name","n")
    .string("phone")
    .argv;


function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
        data.listContacts();    
      break;
    case 'get':
        data.getContactById(id);
      break;

    case 'add':
        data.addContact(name, email, phone);
      break;

    case 'remove':
        data.removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);

const app = express();

app.use(express.json());
app.use(morgan('tiny'))

function validateCreateUser(req, res, next) {
  const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
  });

  const result = userSchema.validate(req.body);
  if (result.error) {
    return res.status(400).json(result.error);
  }
  next();
}

app.post("/contacts", validateCreateUser, (req, res, next) => {
 const id = uuid.v4();
 
  console.log(id);
  return res.send("world");
});

app.listen(PORT, () => {
  console.log("Server started listening on port", PORT);
});


app.get('/contacts', listContacts)