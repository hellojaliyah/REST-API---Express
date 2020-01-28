//LOAD EXPRESS
const express = require('express');

//BY CONVENTION THE FUNTION IS STORED WITH APP
const app = express();


// //THIS ALLOWS US TO UTILIZE MULTIPLE USEFUL METHODS
// app.get()
// app.post()
// app.put()
// app.delete()


//DEFINED A ROOT ROUTE WITH THE MESSAGE HELLO WORLD

app.get('/', (req, res) => {
res.send('Hello World!')
});


//DEFINING NEW ROUTE BY CALLING APP.GET()
app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3])
})


app.listen(3000, () => console.log('listening on port 3000'));


//