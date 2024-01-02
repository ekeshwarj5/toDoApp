const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mayurjhode55:EJjhode128@cluster0.gaqmpjr.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}