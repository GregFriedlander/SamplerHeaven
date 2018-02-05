var mongoose = require('mongoose');
var User = mongoose.model('User');
var Sampler = mongoose.model('Sampler');
var Request = mongoose.model('Request');

module.exports = {
    create: function(req,res){
        console.log('hit Samplers.create');
        var newSampler = new Sampler(req.body);
        newSampler._user = req.session.userId;
        newSampler.save(function(err){
            if(err){
                console.log('The new sampler DID NOT save');
                res.send(err);
            }else{
                console.log('The new sampler SAVED: ', newSampler);
                res.send(true);
            }
        })
    },
    getall: function(req,res){
        console.log('hit Samplers.get all');
        Sampler.find({})
        .exec(function(err,foundSamplers){
            if(err){
                console.log('something went wrong looking for Samplers');
                res.send(err);
            }else{
                res.json(foundSamplers);
            }
        })
    },
    getsinglesampler: function(req,res){
        console.log('hit Samplers.getsinglesampler with id: ', req.params.id);
        Sampler.findOne({_id: req.params.id})
        .exec(function(err, foundSampler){
            if(err){
                console.log('There was an error getting this Sampler');
                res.send(err);
            }else{
                res.json(foundSampler);
            }
        })
    },
    update: function(req,res){
        console.log('hit Samplers.update');
        Sampler.findOne({_id: req.params.id}, function(err,sampler){
            if(err){
                console.log('something went wrong trying to update');
                res.send(err);
            }else{
                console.log('sampler new brand = ', req.body.brand);
                sampler.brand = req.body.brand;
                sampler.model = req.body.model;
                sampler.condition = req.body.condition;
                sampler.price = req.body.price;
                sampler.details = req.body.details;
                sampler.image = req.body.image;
                sampler.save(function(err){
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
    delete: function(req,res){
        console.log('hit Samplers.delete');
        Sampler.remove({_id: req.params.id}, function(err){
            if(err){
                console.log('something went wrong trying to delete');
                res.json(err);
            }else{
                console.log('successfully deleted sampler');
                res.json(true);
            }
        })
    }
}