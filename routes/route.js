const express = require('express');
const router = express.Router(); //Router is a methhod in nodeJS

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

//exporting the router module
module.exports = router;