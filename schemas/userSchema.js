const userSchema = new Schema({
    firstName: String,
    lastName: String,
    phones: [String],
    emails: [String]
  });

  module.exports = userSchema;