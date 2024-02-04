const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
  },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  disabled: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
