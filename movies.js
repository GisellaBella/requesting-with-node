var request = require("request");
var http = require("http");
var requestInfo = "&y=&plot=short&r=json";
request.url = "http://www.omdbapi.com/?t=";//t for movie title

var threeFavorites = ["GroundHog Day", "Ferris Bueller's Day Off", "The Fight Club"];

threeFavorites.forEach(function(movie){
		//console.log(http.get("http://www.omdbapi.com/?t=") + movie + "&y=&plot=short&r=json");
		var request=http.get("http://www.omdbapi.com/?t=") + movie + "&y=&plot=short&r=json";
		request.success = function(response){
		console.log(response);
		var body= JSON.parse(body);
		console.log(body);
		};
});	
			
			
	//http://www.omdbapi.com/?t=ferris bueller's day off&y=&plot=short&r=json

		