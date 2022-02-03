//A file that holds the schema(A schema is the overall structure of the database) of the database
const mongoose = require('mongoose');

//Creation Of Schema
let employeeSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    designation : String,
    salary : Number
})


module.exports = mongoose.model('Employee', employeeSchema)