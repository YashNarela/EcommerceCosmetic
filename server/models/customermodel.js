const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  contact: String,
  email: String,
  pin:String,
  pno:String,
  password: String,
});

module.exports = mongoose.model("customer", customerSchema);
