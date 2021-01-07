const controller = {} ;
const md5		= require('md5');
const flash 	 = require('connect-flash');
const db		 = require('../../db');
controller.kirim = (req,res)=> {
	res.render('users/kirim',{
		message : {
			sukses : req.flash('sukses'),
		}
	})
}


controller.input = (req,res)=> {
	const date = new Date();
	const { judul , tanggal , question  } = req.body ;
	const no_tiket   = "HD" + md5(date) ;
	const pengirim		= 'dasep' ;
	const sql		= "insert into question (no_tiket,pengirim,tanggal,pertanyaan , status) values('"+ no_tiket +"' , '"+ pengirim +"' , '"+ tanggal +"' , '"+ question +"'  , 1  )"
	db.query(sql ,(err,rows)=>{
		if(err){
			res.status(404);
		}
		req.flash('sukses','pertanyaan di kirim');
		res.redirect('compose');
	})
}

module.exports = controller ;