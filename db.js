const mysql 	= require('mysql');

const db = mysql.createConnection({
	host : 'localhost' ,
	user : 'root' ,
	password : '',
	database : 'helpdesk'
})

if(!db){
	console.log("server tidak konek ke database");
}

module.exports = db ;