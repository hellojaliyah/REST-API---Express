const Joi = require('joi')
const logger require('./logger')
const express = require('express')
const app = express();

app.use(express.json)

app.use(logger)

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];

app.get('/', (req, res) => {
    res.send('Hellow World')
});

app.get('/api/courses', (req, res) => {
    res.send(courses)
})