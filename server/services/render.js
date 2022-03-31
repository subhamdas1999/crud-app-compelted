const axios = require('axios');

PORT=process.env.PORT

HOST=process.env.HOST
console.log({PORT})
console.log({HOST})


exports.homeRoutes = (req, res) => {
   
// Make a get request to /api/users

const BASE_URL = `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`


console.log({BASE_URL})


axios.get(`${BASE_URL}/api/users`)
.then(function(response){

    // console code for check in terminal
   // console.log(response)
    res.render('index', { users : response.data });
})
.catch(err =>{
    res.send(err);
})



}




exports.add_user = (req, res) =>{
    res.render('add_user');
}




exports.update_user = (req, res) =>
{
    axios.get(`${BASE_URL}/api/users`, { params : { id : req.query.id }})
    .then(function(userdata){
        res.render("update_user", { user : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}
