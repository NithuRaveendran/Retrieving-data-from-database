
const Sequelize = require('sequelize');
    const sequelize = new Sequelize('node-complete','root','Hamlet#12@03',{
    dialect:'mysql',
    host: 'localhost'

});


module.exports = Sequelize;


