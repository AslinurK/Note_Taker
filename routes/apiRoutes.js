
//const express = require("express");
const fs = require("fs");

//Read the db.json file
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

module.exports = function(app) {

    //Get the data in db.json
    app.get("/api/notes", function(req, res){
        res.json(data);
    })

    //Add new notes in db.json
    app.post("/api/notes",function(req, res){

        var newNote = req.body;

        var id_newNote = (data.length).toString();
        newNote.id = id_newNote;
        data.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(data), function (err) {
            if (err) throw (err);
        });

        res.json(data);
    })

    //Delete note with id 
    app.delete("/api/notes/:id",function(req, res){

        var noteToDelete = req.params.id;

        var newId = 0;
        console.log(`Deleting note with id ${noteToDelete}`);
        //use data(fs) module to read and db.json and delete appropriate
        data = data.filter(currentNote => {
            return currentNote.id != noteToDelete;
        });

        for (currentNote of data) {
            currentNote.id = newId.toString();
            newId++;
        }

        fs.writeFileSync("./db/db.json", JSON.stringify(data));
        res.json(data);
        
    })
}