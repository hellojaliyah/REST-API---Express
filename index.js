const Joi = require('joi')
const logger = require('./logger')
const express = require('express')
const app = express();

app.use(express.json())  //to use req.body
app.use(express.urlencoded({extended: true})) //parses income req key value pairs
app.use(express.static('public')) //static assets go here

app.use(logger)

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/api/courses', (req, res) => {
    res.send(courses)
})


app.listen(5000)