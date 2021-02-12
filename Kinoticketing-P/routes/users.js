var express = require('express');
var router = express.Router();

var test = "1234";
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('User Sideasdsd'+ test);
});

router.get('/cool', function(req, res, next){
  res.send("Du bist cool");
})

module.exports = router;
