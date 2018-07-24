var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var projectSchema = new Schema({
  picture: String,
  title: String,
  link: String,
  category: String,
  subtitle: String,
  duration: String,
  location: String,
  note: String
});

var Project = mongoose.model("Project", projectSchema);

module.exports = Project;

