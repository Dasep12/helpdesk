const express   = require('express');
const app 		= express();
const path 		= require('path');
const port 		= 8090 ;
const bodyParser = require('body-parser');
//setting file render html
app.set('view engine', 'ejs');
//setting location views 
app.set('views', path.join(__dirname, 'views'));

//setting file static 
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended : false }));

const routesUser  = require('./routes/users/users');

app.use('/users',routesUser);

app.listen(port , () => {
	console.log("running on port " + port);
})






