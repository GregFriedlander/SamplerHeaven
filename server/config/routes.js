var path = require('path');
var Users = require('./../controllers/users.js');
var Samplers = require('./../controllers/samplers.js');
var Requests = require('./../controllers/requests.js');

module.exports = function(app){
    app.post('/adduser', Users.register);
    app.post('/login', Users.login);
    app.get('/currentuser', Users.currentuser);
    app.post('/addsampler', Samplers.create);
    app.get('/allsampler', Samplers.getall);
    app.get('/getsinglesampler/:id', Samplers.getsinglesampler);
    app.post('/updatesampler/:id', Samplers.update);
    app.post('/deletesampler/:id', Samplers.delete);
    app.get('/samplerbrands', Samplers.samplerbrands);
    app.post('/addrequest', Requests.add);
    app.get('/allrequests', Requests.getall);
    app.post('/deleterequest/:id', Requests.delete);
    app.get('/getsinglerequest/:id', Requests.getsinglerequest);
    app.post('/updaterequest/:id', Requests.update);
    app.all("*", (req, res) => { res.sendFile(path.resolve("./public/dist/index.html")) });
}