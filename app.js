//LOAD EXPRESS
const express = require('express');

//BY CONVENTION THE FUNTION IS STORED WITH APP
const app = express();

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
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };

    //push the new object into array
    courses.push(course);
    //by convention post object to server; it should return the object in the body of the response
    res.send(course);
    //because the client needs to know the id of the new object
})
app.listen(3000, () => console.log('listening on port 3000'));


//