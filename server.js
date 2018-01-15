var express = require('express');
var app = express();

// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

var index = require('./routes/index');
var user = require('./routes/user');



app.use(express.static(__dirname+'/dist'));

app.use('/',index);
app.use('/user',user);

app.listen(8888);

