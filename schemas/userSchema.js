const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  phones: [String],
  emails: [String]
});

module.exports = UserSchema;
