const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const pageRouter = require('./routes/route')
//Body Parser Middleware
const bodyParser = require('body-parser')

//Middleware
dotenv.config({path: './config.env'});



//Middleware for our bodyParser
app.use(bodyParser.urlencoded({extended:true}))

//connecting to mongoDb database
mongoose.connect(process.env.DATABASE_LOCAL, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true

    // useCreateIndex: true
})


//basic setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views' ))
app.use(express.static('public'));


//router middleware
app.use(pageRouter);

//setting up the port which the app is listening to
const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server started on port 3000")
})