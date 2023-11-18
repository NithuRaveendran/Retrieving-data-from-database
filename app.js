const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require('./util/database');
const sequelize = require('./util/database');

const app = express();

app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
sequelize
.sync()
.then(result => {
    //console.log(result);
    app.listen(3000);
})
.catch(err =>{
    console.log(err);
})
