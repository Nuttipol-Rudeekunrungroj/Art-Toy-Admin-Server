const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    adminName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "admin",
    },
  });
  
  const Admin = mongoose.model("Admin", AdminSchema);
  module.exports = Admin;