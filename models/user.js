const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

//Da povezemo passport sa mongoose Schemom i ona nam da neke fields automatski
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
