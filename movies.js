

var request = require("request");

	var movie=function (movieTitle) { 
		var movieInfo = request("http://www.omdbapi.com/?t=" + movieTitle, function(err,res, body) {
			var answer = JSON.parse(body);
			console.log (answer.Title );
		
			});
		};

module.exports = movie;