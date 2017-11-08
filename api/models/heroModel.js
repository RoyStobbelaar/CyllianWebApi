

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HeroSchema = new Schema({
    name: {
        type: String,
        required: 'Name of the hero'
    },
    maxHp: {
        type: Number,
        required: 'A hero needs hp'
    },
    currentHp: {
        type: Number,
        default: this.maxHp
    },
    maxMana: {
        type: Number,
        required: 'A hero needs mana'
    },
    currentMana: {
        type: Number,
         default: this.maxMana
    },
    portrait: {
        type: String,
        required: "A hero needs a portrait"
    },
    strength: {
        type: Number,
        required: 'A hero needs strength'
    },
        dexterity: {
        type: Number,
        required: 'A hero needs dexterity'
    },
        intelligence: {
        type: Number,
        required: 'A hero needs intelligence'
    },
        level: {
        type: Number,
        required: 'A hero needs a level'
    },
        experience: {
        type: Number,
        required: 'A hero needs experience'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    class: {
        type: [{
            type: String,
            enum: ['Warrior','Barbarian', 'Knight', 'Assassin', 'Ranger', 'Rogue', 'Sorcerer', 'Wizard', 'Warlock', 'Priest']
        }],
        default: 'None'
    }
});

module.exports = mongoose.model('Heros', HeroSchema);