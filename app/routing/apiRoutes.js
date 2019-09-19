// Import the list of friend entries
let friends = require("../data/friends");

//Exports API routes
module.exports = function(app) {

    // API GET Requests
    //Displays all JSON of the data in table
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // API POST Requests
    // Handles the data that is being inputted by the user
    app.post("/api/friends", function(req, res) {
		
		// holds the best match, updating as we go
    // loop through all of the options
    let bestMatch = {
		name: "",
		photo: "",
		friendDifference: 1000
	  };
  
	  // Here we take the result of the user's survey POST and parse it.
		let userData = req.body;
		let userName = userData.name;
	  let userScores = userData.scores;
  
	  // This variable will be used to calculate the difference between the user's scores and the scores of
	  // each user in the database
	  let totalDifference = 0;
  
	  let b = userScores.map(function(item){
			return parseInt(item,10);
		});
		userData = {
			name:req.body.name,
			photo:req.body.photo,
			score:b
		};

		console.log("Name: " + userName);
		console.log("User Score: " + userScores);

		let sum = b.reduce((a, b) => a + b, 0);
		console.log("Sum of user score " + sum);
		console.log("Best match friend " + bestMatch.friendDifference);
		console.log("===================================================");
		
		for( let i = 0; i < friends.length; i++) {
			console.log(friends[i].name);
			totalDifference = 0;
			console.log("Total Difference: " + totalDifference);
			console.log("Best match friend difference " + bestMatch.friendDifference);

			let bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
			console.log("Total friend score " + bfriendScore);
			totalDifference += Math.abs(sum - bfriendScore);
			console.log("------------------> " + totalDifference);

			if(totalDifference <= bestMatch.friendDifference) {
			bestMatch.name = friends[i].name;
			bestMatch.photo = friends[i].photo;
			bestMatch.friendDifference = totalDifference;
			}
			console.log(totalDifference + " Total Difference");
		}

		console.log(bestMatch);
		friends.push(userData);
		console.log("New user added");
		console.log(userData);
		res.json(bestMatch);
	});
};
		

