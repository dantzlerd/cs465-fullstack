// var fs = require('fs');
// var meals = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', { title: 'Travlr Foods' });
};

module.exports = {
    meals
};
