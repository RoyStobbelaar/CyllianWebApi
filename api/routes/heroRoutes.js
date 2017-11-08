'use strict';
module.exports = function(app) {
    var heroList = require('../controllers/heroController');

    //Hero routes
    app.route('/heros')
    .get(heroList.list_all_heros)
    .post(heroList.create_a_hero);

    app.route('/heros/:heroId')
    .get(heroList.read_a_hero)
    .put(heroList.update_a_hero)
    .delete(heroList.delete_a_hero);
};