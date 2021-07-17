var express = require('express');
var db = require("../database-mongo");
var app = express();
var port = 3000;

app.use(express.static(__dirname + "/../react-client/dist"));


app.use(express.json())
app.use(express.static(__dirname + "/../client/build"));
app.use(express.urlencoded({ extended: true }));



app.get('/movies', function (req,res){
    db.selectAll(function(err,data){
        if(err){
            res.sendStatus(500)
        }else{
            res.json(data)
        }
    })
})

app.post('/addpost', (req,res)=>{
    db.created(req.body, (err,data)=>{
        res.send({message:'posted'})
    })
})


app.delete('/deletpost/:id', (req,res)=>{
    db.deleted(req.params.id, (err,data)=>{
        res.send({message :'deleted'});
   });
});


app.put('/update/:id', (req,res)=>{
    db.updated(req.params.id, req.body, (err,data) => {
        res.send({message:'updated'})
    });
});







app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

