var query = require('./database/query');

console.log('The bot is starting');




var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

query.Puns().then(function(puns) {

    tweetIt();
    setInterval(tweetIt, 1000 * 5);

    function tweetIt() {
         {
            var tweet = {
                status: puns[].Pun
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
})
