// Pull in required dependencies
var path = require("path");

// ROUTING
module.exports = function(app) {

    // HTML GET Requests
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    // Catch-all route to homepage
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};