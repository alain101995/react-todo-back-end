const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoDB = "mongodb://127.0.0.1/todo";
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB);

db.on("error", console.error.bind(console, "MongoDB connection error: "));

const todoSchema = new Schema({
  todoID: Number,
  userID: Number,
  title: String,
  description: String,
  dueDate: Date,
  createdDate: Date,
  completedDate: Date,
  completed: Boolean
});
const Todos = mongoose.model("tasks", todoSchema);

findTodos = () => {
  return Todos.find({});
};

module.exports = {
  findTodos
};

// function findInRunesDb(summonerId) {
//   return new Promise(function (resolve, reject) {
//     Runes.find({ 'summonerId': summonerId }, 'summonerId name expireAt pages', function (err, runesData) {
//       console.log('RunesData', runesData)
//       if (runesData.length < 1 || runesData.expireAt < new Date(new Date().getTime())) {
//         resolve(false)
//       }
//       else {
//         resolve(runesData)
//       }
//       reject(err)
//     });
//   });
// }

// function create(runes) {
//   const expireAt = new Date(new Date().getTime() + oneDay),
//     runesData = new Runes({
//       expireAt,
//       summonerId: runes.summonerId,
//       pages: runes.pages
//     });
//   console.log('Created', runesData);
//   return runesData.save();
// }

// function remove(summonerId) {
//   Runes.remove({ 'summonerId': summonerId }, function (err) {
//     if (err) return (err);
//     console.log('Removed')
//   });
// }

// module.exports = {
//   create,
//   findInRunesDb,
//   remove
// }

// /*
// function save(runes) {
//   runesData.save(runes, function (error) {
//     console.log('Data saved');
//     if (error) {
//       console.log(error);
//     }
//   });
// }
// */
