const controller = {} ;

//controller untuk dashboard user  atau client
controller.dashboard = (req,res)=> {
	res.render('users/index');
}


//lihat reply atau balasan dari IT
controller.chatting = (req,res)=> {
	res.render('users/chatting');
}

module.exports = controller ;