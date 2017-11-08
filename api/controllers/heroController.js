'use strict';
var mongoose = require('mongoose'),
Hero = mongoose.model('Heros');

exports.list_all_heros = function(req, res) {

    //Set header
    res.header('Access-Control-Allow-Origin','*');

    Hero.find({}, function(err, hero) {
        if(err) {
            res.send(err);
        }
        res.json(hero);
    });
};

exports.create_a_hero = function(req, res) {
    var new_hero = new Hero(req.body);
    //Manuel set current values
    new_hero.currentHp = new_hero.maxHp;
    new_hero.currentMana = new_hero.maxMana;

    new_hero.save(function(err, hero) {
        if(err) {
            res.send(err);
        }
        res.json(hero);
    });
};

exports.read_a_hero = function(req, res) {
    Hero.findById(req.params.heroId, function(err, hero) {
        if(err) {
            res.send(err);
        }
        res.json(hero);
    });
};

exports.update_a_hero = function(req, res) {
    Hero.findOneAndUpdate({_id: req.params.heroId}, req.body,{new: true},function(err, hero) {
        if(err) {
            res.send(err);
        }
        res.json(hero);
    });
};

exports.delete_a_hero = function(req, res) {
    Hero.remove({
        _id: req.params.heroId
    }, function(err, hero) {
        if(err) {
            res.send(err);
        }
        res.json({ message: 'Hero is deleted' });
    });
};