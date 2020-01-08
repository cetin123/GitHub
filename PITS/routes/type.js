var express = require('express');
var router = express.Router();
var sql = require("mssql");

var webconfig = {
  server: "localhost",
  database: "PITS",
  user: "sa",
  password: "648397"
};


router.get('/', function (req, res, next) {
 // console.log("req", req)
  (async function () {
    try {
      let pool = await sql.connect(webconfig)
    
        var result1 = await pool.request()
        .query("select fault from Project_type group by fault ORDER BY fault")
      
      
      console.log(result1);
      // res.send(result1)
      if (result1.rowsAffected > 0) {
        res.send(result1)
      } else {
        console.log("test")
        res.send({
          "error": true,
          "message": "Sistemde herhangi bir kayıt bulunamadı!"
        })
      }

      // Stored procedure


    } catch (err) {
      // ... error checks
    }
    finally{sql.close();}
  })()
})

module.exports = router;
