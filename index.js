const config = require('config')
const Joi = require('joi')
const logger = require('./logger')
const express = require('express')
const app = express();
const helmet = require('helmet')
const morgan = require('morgan')
const debug = require('debug')('app:startup')
const secretConfig = require('./config/custom-enviroment-variables.json')
const genres = require('./routes/genre.js')


//SET VIEW ENGINE FOR APPLICATION
app.set('view engine', 'pug');
app.set('views', './views') //all templates should go here (although this is optional)


app.use('/api/genres', genres)

app.use(express.json())  //to use req.body
app.use(express.urlencoded({extended: true})) //parses income req key value pairs
app.use(express.static('public')) //static assets go here
app.use(helmet())

//configs
console.log('Application Name: ' + config.get('name'))
console.log('Mail Server: ' + config.get('mail.host'))
// console.log('Mail Password: ' + secretConfig.get('mail.password'))


if(app.get('env') === 'development') {
app.use(morgan('tiny'))
debug('Morgan enabled...') //shorter than console.log statements
}


app.use(logger)


//returning html mark up to client
app.get('/', (req, res) => {
    res.render('index', { title: 'My express app', message: 'Hello'})
});

app.get('/api/courses', (req, res) => {
    res.send(courses)
})


app.listen(5000)