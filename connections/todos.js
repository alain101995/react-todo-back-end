const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/test', { useMongoClient: true, promiseLibrary: global.Promise });

// const seconds = 1000,
//   minutes = 60,
//   hour = 60,
//   days = 24

// const oneDay = seconds * minutes * hour * days;
// const runesSchema = new Schema({
//   expireAt: Date,
//   userID: Number,
//   firstName: String,
//   lastName: String,
//   phones: String[],
//   emails: String[]
// });
// const Runes = mongoose.model('runes', runesSchema);

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