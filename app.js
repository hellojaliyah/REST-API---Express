//DEPENDENCIES

//LOAD EXPRESS
const express = require('express');

//BY CONVENTION THE FUNTION IS STORED WITH APP
const app = express();
//Load the installed module
const Joi = require('joi');

//MIDDLEWARE BBY!
//enable parsing of JSON objects in body
app.use(express.json())


app.get('/', (req, res) => {
res.send('Hello World!')
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3])
})


//new route hander
app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    
    const result = Joi.validate(req.body, schema);
    console.log(result)

    //validation logic
    //Let's replace with join
    if (result.error) {
        //400 Bad Request
        res.status(400).send(result.error.details[0].message) //sends message instead of object
        return;
    }
    
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };

    courses.push(course);
    res.send(course);
})
app.listen(3000, () => console.log('listening on port 3000'));


//