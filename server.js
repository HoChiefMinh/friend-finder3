// Pull in required dependencies
const express = require("express");
let path = require("path");

// Sets up the Express App
// =============================================================
let app = express();
let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Expose the public directory to access CSS files
app.use(express.static("app/public"));

// Add the application routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});