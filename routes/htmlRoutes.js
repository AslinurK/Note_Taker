// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  //Click on Note Taker in navbar
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  // click on "Get Starde" button
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  
  //force the path js and CSS
  app.get("/assets/js/index.js", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
  });
  
  //force the path CSS
  app.get("/assets/css/styles.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
  });

  //If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
   
};