//RESTful Services & APIs
//Client server architecture

//client = front end
//server = backend, services accessible through http protocol
//REST - representational state transfer
//REST is a convention for building the http services as in the CRUD operations
//CRUD = Create, Read, Update, + Delete


//REAL LIFE
////Client app manages list of customers
//http://vidly.com/api/customers  -- "customers" is referred to as the resource
//This url is where the server will expose the endpoint for customers to use
//Customers send http req to the endpoint to  communicate with Servre


//Every http method has a different intention - get, post, put, + delete

//GET may return an array of customer objects
//DELETE may delete a customer object
//POST may add a customer to the database object
//PUT may update a customers info


//We will use Express to manage this, without using a database to reduce any complexity 

