var request = require("request");
var url = "http://www.omdbapi.com/?t=";//t for movie title
var requestInfo = "&y=&plot=short&r=json";
var threeFavorites = ["GroundHog Day", "Ferris Bueller's Day Off", "The Fight Club"];
var http = require("http");

threeFavorites.forEach(function(movie){
		console.log(http.get("http://www.omdbapi.com/?t=") + movie + "&y=&plot=short&r=json");
		var request=http.get("http://www.omdbapi.com/?t=") + movie + "&y=&plot=short&r=json";
		console.log(request);
		var movieInfo = body;
		console.log(movieInfo);
		});
			
			
	//http://www.omdbapi.com/?t=ferris bueller's day off&y=&plot=short&r=json

		
			



