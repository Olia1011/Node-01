// mongodb+srv://olia:father220458@cluster0.d6gzm.mongodb.net/<dbname>?retryWrites=true&w=majority
const mongodb = require('mongodb');
const { MongoClient } = mongodb;
const MONGODB_URL =
  ' mongodb+srv://olia:father220458@cluster0.d6gzm.mongodb.net/<dbname>?retryWrites=true&w=majority';
const DB_NAME = 'db-contacts';

let db, contacts;

async function main() {
  const client = await MongoClient.connect(MONGODB_URL);
  console.log('Database connection successful');

  const db = client.db(DB_NAME);
  const contacts = db.collection('contacts');
  // await contacts.insertMany([{}])
}

main();



// const app = express();
// app.use(express.json());
// app.use(morgan('tiny'))

// function validateCreateUser(req, res, next) {
//   const userSchema = Joi.object({
//     name: Joi.string().required(),
//     email: Joi.string().required(),
//     phone: Joi.string().required(),
//   });

//   const result = userSchema.validate(req.body);
//   if (result.error) {
//     return res.status(400).json(result.error);
//   }
//   next();
// }

// app.post("/contacts", validateCreateUser, (req, res, next) => {
//  const id = uuid.v4();

//   console.log(id);
//   return res.send("world");
// });

// app.listen(PORT, () => {
//   console.log("Server started listening on port", PORT);
// });

// app.get('/contacts', listContacts)
