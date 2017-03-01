var query = require('./database/query');

console.log('The bot is starting');




var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

query.Puns().then(function(puns) {

	function doScaledTimeout(i) {
	  setTimeout(function() {
	    tweetIt(i)
	  }, i * 1000 * 60);
	}
	for (var i = 1; i <= 99; i++)
	  doScaledTimeout(i);
    //tweetIt();
    //setInterval(tweetIt, 1000 * 5);
    function tweetIt(i) {
         {
            var tweet = {
                status: puns[i].Pun
            }
        }
        T.post('statuses/update', tweet, tweeted);

        function tweeted(err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log("It worked!");
            }
        }
    }

		function warning(){
			{
				 var tweet = {
						 status:
				 }
		 }
		 T.post('statuses/update', tweet, tweeted);

		 function tweeted(err, data, response) {
				 if (err) {
						 console.log(err);
				 } else {
						 console.log("It worked!");
				 }
		 }
 }
		}

	})
