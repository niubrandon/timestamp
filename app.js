//require imports for node.js
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

//creare an instace of express for our app and bodyParser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
//GET call to return JSON that formats natural and unix date
//passing parameter
app.get('/dateValues/:dateVal',function(req,res,next){
//get the request date for date
var dateVal = req.params.dateVal;
//Options for fomatting date in natural date view
var dateFormattingOptions = {
  year:'numeric',
  month:'long',
  day:'numeric'
};

if(isNaN(dateVal)){
var naturalDate = new Date(dateVal);
naturalDate = naturalDate.toLocaleDateString("en-us",dateFormattingOptions);
//get unix date conversion
  var unixDate = new Date(dateVal).getTime()/1000;
}
else {
  var unixDate = dateVal;
  var naturalDate = new Date(dateVal *1000);
  naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
}
res.json({unix:unixDate, natural:naturalDate});
})




app.listen(3000, function(){
  console.log("correct");
});
