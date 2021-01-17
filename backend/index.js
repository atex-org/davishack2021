var express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app);

require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser'); 
const connectDatabase = require('./config/database');
const authRoute = require('./routes/auth');
// const app = express();


app.use(cors()); 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true})); 
app.use(authRoute);
connectDatabase(); 

const port = process.env.PORT || 7000

app.set('port', process.env.PORT || 3000);
app.set('host', "localhost" || '34.94.79.201');

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})

http.createServer(app).listen(app.get('port'), app.get('host'), function(){
  console.log("Express server listening on port " + app.get('port'));
});