const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv')
const mongoose = require('mongoose');


//Middleware
dotenv.config({path: './config.env'});

//connecting to mongoDb database
mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true
})


//basic setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views' ))
app.use(express.static('public'));





//setting up the port which the app is listening to
const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server started on port 3000")
})