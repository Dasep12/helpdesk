const controller = {} ;
const db		 = require('../../db');
//controller untuk dashboard user  atau client
controller.dashboard = (req,res)=> {
	db.query("select * from question order by id desc", (err,rows)=> {
		res.render('users/index', {
			data : rows
		});
	})
}


//lihat reply atau balasan dari IT
controller.chatting = (req,res)=> {
	res.render('users/chatting');
}

module.exports = controller ;