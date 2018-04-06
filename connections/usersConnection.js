const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoDB = "mongodb://127.0.0.1/todo";
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB);

db.on("error", console.error.bind(console, "MongoDB connection error: "));

const data = {
  firstName: "Alain",
  lastName: "Quiroz",
  phones: ["3471857195", "7541915091"],
  emails: ["alain@mail.com", "victor@correo.com"]
};

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  phones: [String],
  emails: [String]
});

const User = mongoose.model("users", userSchema);

findUser = () => {
  return User.find({});
};

saveUser = newUser => {
  console.log("New user: ", newUser);
  const userToSave = new User(newUser);
  return new Promise((resolve, reject) => {
    userToSave.save(err => {
      if (err) {
        reject(err);
      } else {
        resolve(200);
      }
      reject(err);
    });
  });
};

deleteUser = userID => {
  const id = userID.id;
  return new Promise((resolve, reject) => {
    User.findByIdAndRemove({ _id: id }, err => {
      if (err) {
        reject(err);
      } else {
        resolve(200);
      }
      reject(err);
    });
  });
};

module.exports = {
  findUser,
  saveUser,
  deleteUser
};
