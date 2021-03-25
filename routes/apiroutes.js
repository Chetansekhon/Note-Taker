var db = require("../db/db.json");
var fs = require("fs")
const shortid = require('shortid');
console.log(shortid.generate());

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        res.json(db)
    });

    app.post("/api/notes", function(req, res){
        console.log(req.body);
        var save ={
            id:shortid.generate(),
            title:req.body.title,
            text:req.body.text
            
        }
        console.log(save);
        db.push(save)
        fs.writeFile("./db/db.json",JSON.stringify(db),function(error){
            if(error)throw error;
            res.json(db)
        })
    }
    )
}