var mongoose = require('mongoose');
var User = mongoose.model('User');
var Sampler = mongoose.model('Sampler');
var Request = mongoose.model('Request');

module.exports = {
    add: function(req,res){
        console.log('hit Requests.add');
        var newRequest = new Request(req.body);
        newRequest._user = req.session.userId;
        newRequest.save(function(err){
            if(err){
                console.log('The new request DID NOT save');
                res.send(err);
            }else{
                console.log('The new request SAVED: ', newRequest);
                res.send(true);
            }
        })
    },
    getall: function(req,res){
        console.log('hit Requests.getall');
        Request.find({})
        .exec(function(err,foundRequests){
            if(err){
                console.log('something went wrong looking for Requests');
                res.send(err);
            }else{
                res.json(foundRequests);
            }
        })
    },
    delete: function(req,res){
        console.log('hit Requests.delete');
        Request.remove({_id: req.params.id}, function(err){
            if(err){
                console.log('something went wrong trying to delete');
                res.json(err);
            }else{
                console.log('successfully deleted request');
                res.json(true);
            }
        })
    },
    getsinglerequest: function(req,res){
        Request.findOne({_id: req.params.id})
        .exec(function(err, foundRequest){
            if(err){
                console.log('There was an error getting this Request');
                res.send(err);
            }else{
                res.json(foundRequest);
            }
        })
    },
    update: function(req,res){
        console.log('hit Requests.update');
        Request.findOne({_id: req.params.id}, function(err,request){
            if(err){
                console.log('something went wrong trying to update');
                res.send(err);
            }else{
                console.log('request new brand = ', req.body.brand);
                request.brand = req.body.brand;
                request.model = req.body.model;
                request.condition = req.body.condition;
                request.minPrice = req.body.minPrice;
                request.maxPrice = req.body.maxPrice;
                request.details = req.body.details;
                request.image = req.body.image;
                request.save(function(err){
                    if(err){
                        console.log('something went wrong');
                        res.json(err);
                    }else{
                        console.log('update successful');
                        res.json(true);
                    }
                })
            }
        })
    },
}