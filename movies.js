var request = require("request");
var http = "http:";
var url = "http://www.omdbapi.com/?t=";//t for movie title
var requestInfo = "&y=&plot=short&r=json";
var threeFavorites = ["GroundHog Day", "Ferris Bueller's Day Off", "The Fight Club"];

threeFavorites.forEach(function(movie){
		request(url,function(err,res,body){
			var request = http.get("http://www.omdbapi.com/?t=") + movie + "&y=&plot=short&r=json";
			console.log(request);
			var movieInfo = body;
			console.log(movieInfo);
		});
	});