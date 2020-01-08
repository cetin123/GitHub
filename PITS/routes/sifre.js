var express = require('express');
var router = express.Router();
var sql = require("mssql");
var sha512 = require('js-sha512');

var webconfig = {
    server: "localhost",
    database:"PITS",
    user:"sa",
    password:"648397"
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sifre', { title: 'Express' });
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
      
         result1 = await pool.request()
       
         .input('kadi', sql.NVarChar, req.body.kadi)
         .input('sifre', sql.NVarChar, sha512(req.body.sifre))
      
            .query('update User_Login set password= @sifre where username = @kadi'); 
        
            
        if ( result1.rowsAffected > 0 ) {
            console.log(result1)
            
            res.send({
                
                "success": true,
                "error" : false,
                "message": "Şifreniz Başarıyla Değiştirildi.",
                
            
              
               
            })
            
        } else {
            sql.close();
            console.log("test")
            res.send({
                "error": true,
                "message": "Şifre Değiştirme İşlemi Başarısız."
               
            })
        }
    
    } catch (err) {
          // ... error checks
          sql.close();
          res.send({
            "error": true,
            "message": ""+err.message
           
        })
    }
    finally{sql.close();}
   
})()
 
})


module.exports = router;