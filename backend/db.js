const mongoose = require("mongoose");

// mongodb+srv://mayurjhode55:<password>@cluster0.gaqmpjr.mongodb.net/
mongoose.connect("mongodb+srv://mayurjhode55:<password>@cluster0.gaqmpjr.mongodb.net/");
const toDoSchema = mongoose.Schema({
    title : String,
    decription : String,
    completed : Boolean,

})

const toDo = mongoose.model('toDos', toDoSchema);

module.exports = {
    toDo
}