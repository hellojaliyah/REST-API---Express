const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        //...
    }

    if (req.url === '/api/courses') {
        //...
    }
});

server.listen(3000);

//This approach is fine, but not ideal for building complex apps
//We wouldn't want to hard code all the if statements in the function
//Express is a fast and lightweight framework for building web apps