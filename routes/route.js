const express = require('express');
const router = express.Router(); //Router is a methhod in nodeJS

//requiring the schema module in order to make use of it
const Employee = require('../models/Employee')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/search', (req, res) => {
    res.render('search')
})

router.get('/add', (req, res) => {
    res.render('add')
})

router.get('/view', (req, res) => {
    res.render('view')
})

router.post('/', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if(username === "john" && password==="pass"){
        res.redirect('view')
    } 
    else{
        res.render('index')

    }
})

router.post('/add', (req, res) => {
    let newEmployee = {
        fname : req.body.fname,
        lname : req.body.lname,
        email : req.body.email,
        designation : req.body.designation,
        salary : req.body.salary
    }

});


//exporting the router module
module.exports = router;