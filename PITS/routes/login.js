var express = require('express');
var router = express.Router();
var sql = require("mssql");
var sha512 = require('js-sha512');

var webconfig = {
    server: "localhost",
  database: "PITS",
  user: "sa",
  password: "648397"
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});


router.post('/', function(req, res, next) {
 
   
(async function () {
    try {
       if ( !req.body.token || req.body.token != 'zQnZ6jXC68YgezEfLkir6DapNN2I6xCO' ) {
            res.send({
                'error': true,
                'message': 'Geçersiz token!'
            });
        }
        
        let pool = await sql.connect(webconfig)
        let result1 = await pool.request()
            .input('kadi', sql.NVarChar, req.body.kadi)
            .input('sifre', sql.NVarChar, sha512(req.body.sifre))
            .query('select * from User_Login where username = @kadi and password = @sifre')
           // res.send(result1)
        if ( result1.rowsAffected > 0 ) {
            res.send({
                "success": true,
                "error" : false,
                "message": "Giriş başarılı!",
                "data":result1.recordset[0].roles,
                "data1":result1.recordset[0].name_surname,
                "data2":result1.recordset[0].scno,
            })
        } else {
            console.log("test")
            res.send({
                "error": true,
                "message": " Hatalı Kullanıcı Adı ve Şifre ,Giriş Başarısız."
            })
        }
    
        // Stored procedure
        
    
    } catch (err) {
        res.send({
            "error": true,
            "message": "hata"+err.message
        })
    }
    finally{sql.close();}
})()
 
})


module.exports = router;