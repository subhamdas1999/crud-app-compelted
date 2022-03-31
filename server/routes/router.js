const express = require('express');
const route = express.Router()


const controller = require('../controller/controller')

//API

// creating api route for creating request
// to create and add new user we will use post() method
// '/api/users' this is the route path for post request 
//controller.create using this we are calling the create call back function, here controller is the controller.js file 
route.post('/api/users', controller.create);


route.get('/api/users', controller.find);

//when we call the put method we need to specify the id variable 
route.put('/api/users/:id', controller.update);

// we will call http delete method, specify the ID with it's delete route
route.delete('/api/users/:id', controller.delete);



const services = require('../services/render');

// this route is for home page 
// @method GET /
route.get('/',services.homeRoutes);
    
  // this route is for add user
//   @method GET /add-user
route.get('/add-user', services.add_user)

// this route is for update user
//@method GET /update-user
route.get('/update-user', services.update_user)
  
  





 
  

module.exports=route
