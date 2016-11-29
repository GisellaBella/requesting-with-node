
var threeFavorites = ["GroundHog Day", "Ferris Bueller's Day Off", "The Fight Club"];
var movie =[];
var body = [];
var http = require('http');
var request = require("request");

var url = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json.json";

threeFavorites.forEach(function(movie){
	console.log(movie);
	var request=http.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json");
			function response() {	
				var data = '';
				data = data.toJSON();
				response.on('data', function(chunk) {//couldnt' fiure out how to get the data back..."chunking" seemed the recommended method, but i may be missing a step, or have immplemented incoorectly.Can only get the titles back.
				console.log (chunk);	
				data += chunk;
				});
				response.on('end', function() {
				callback(null, JSON.parse(data));
				});
			}
	});

module.exports = threeFavorites;