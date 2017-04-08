var keys = require("./keys.js");

var spotify = require('spotify');

var Twitter = require('twitter');

var request = require('request');

var arg = process.argv;


//my tweets command


var client = new Twitter(keys.twitterKeys);

var myTweets = process.argv[2];

	if (myTweets==="my-tweets"){


	var params = {screen_name: 'wayfarer59'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		
    if (!error) {
    console.log(tweets);
  	}

	for (var i = 0; i < tweets.length; i++) {
        console.log("---------------------");
        console.log("Location: " + tweets[i].user.location);
        console.log("Created: " + tweets[i].created_at);
        console.log("Message: " + tweets[i].text);
        console.log("---------------------");
           
           } 
 	 });
}


//spotify-this-song command

var thisSong = process.argv[2];

var songName = "";

	if (thisSong === "spotify-this-song"){

	for (var i = 3; i < arg.length; i++) {

  	if (i > 3 && i < arg.length) {

    	songName += "+" + arg[i];

  	}else {

    	songName += arg[i];

  		}
	}

spotify.search({ type: 'track', songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
     //console.log(JSON.stringify(data, null, 2));
	console.log(data.artists);

	});

}

//movie-this command

//creating a variable equals to arguments

//var arg = process.argv;


var movieName = "";

//defining the 2nd argument as a command of movie-this

var thisIsMovie = process.argv[2];

	if (thisIsMovie==="movie-this" + movieName){


	for (var i = 3; i < arg.length; i++) {

  		if (i > 3 && i < arg.length) {

    	movieName += "+" + arg[i];

  	} else {

    	movieName += arg[i];

  		}
	}


//omdb api url

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&plot=full&tomatoes=true&r=json";

//url for mr.nobody
//var mrNoBody = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&r=json";

//console.log(queryUrl);

request(queryUrl,function (err,response,body) {
	
	if(!err&& response.statusCode===200){

		console.log("Title:" + JSON.parse(body).Title);
		console.log("Relase Year:" + JSON.parse(body).Year);
		console.log("Imdb Rating:"+ JSON.parse(body).imdbRating);
		console.log("Counrty:"+JSON.parse(body).Country);
		console.log("Language:"+ JSON.parse(body).Language);
		console.log("Plot:"+JSON.parse(body).Plot);
		console.log("Actors:"+JSON.parse(body).Actors);
		console.log("Rotten Tomatoes Rating:"+JSON.parse(body).tomatoRating);
		console.log("Rotten Tomatoes url:"+JSON.parse(body).tomatoURL);

		}
	});
}


	//url for mr.nobody
	var mrNoBody = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=full&tomatoes=true&r=json";

	if (process.argv[2] === "movie-this"){

    	request(mrNoBody,function (err,response,body) {
	
		if(!err&& response.statusCode===200){


		console.log("Title:" + JSON.parse(body).Title);
		console.log("Relase Year:" + JSON.parse(body).Year);
		console.log("Imdb Rating:"+ JSON.parse(body).imdbRating);
		console.log("Counrty:"+JSON.parse(body).Country);
		console.log("Language:"+ JSON.parse(body).Language);
		console.log("Plot:"+JSON.parse(body).Plot);
		console.log("Actors:"+JSON.parse(body).Actors);
		console.log("Rotten Tomatoes Rating:"+JSON.parse(body).tomatoRating);
		console.log("Rotten Tomatoes Url:"+JSON.parse(body).tomatoURL);

		}

	})
}














