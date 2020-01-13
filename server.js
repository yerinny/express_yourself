var express = require('express');
var bp = require('body-parser');
var app = express();

//static directory
app.use(express.static(__dirname + '/static'));
app.use(bp.urlencoded({"extended" :true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// Define an index route?

app.get('/', function(req, res){
    //Result of db query..like would of got this info from there
    var user = {
        "firstName" : "Bob"
    }
    res.render('index', {"user": user, "number" : 42});
});

app.get('/unicorn/:id', function(req,res){
    // get unicorn from db based on id
    console.log(req.params.id);
    res.json(req.params)
})

app.post('/process', function(req,res){
    console.log(req.body);
    res.redirect('/')
})

app.listen(8000, function(){
    console.log("On 8000");
})
