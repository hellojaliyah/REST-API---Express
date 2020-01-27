const http = require('http');


//Callback function 
const server = http.createServer((req, res) => {
    if (req.url ==='/') {
        res.write('Hello World');
        res.end();
    }


//Defining various routes in app
    if (req.url === '/api/courses') {

        //How we respong to client
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});



//This method works, but is not maintainable
//This is when a framework is applied to give a proper structure and keep the code maintainable
//Many frameworks, Express happens to be popular

//How-To-Set-Up:
//npm init--yes
//npm i express

server.listen(3000);