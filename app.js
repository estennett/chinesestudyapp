var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());
// app.use(session({
//   secret: 'lololol'
// }))

//create a cookie if one is not made already
app.use(function(req, res, next){
  if( Object.keys(req.cookies).length === 0 ){
    res.cookie('the cookie', 123456, {maxAge: 90000, httpOnly: true});
    console.log('cookie made');
  }else{
    console.log(`cookie exists: ${Object.keys(req.cookies)}`);
  }
  next();
});

//serve static files
app.use(express.static(__dirname, {'dotfiles': 'allow'}));

app.get('/', function(req, res){
  res.send('hi')
  console.log(req.cookies)
})

var port = 8000;

app.listen(port, function(){
    console.log(`listening on ${port}!`)
})
