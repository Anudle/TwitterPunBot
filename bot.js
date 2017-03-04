var query = require('./database/query');

console.log('The bot is starting');


var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

query.Puns().then(function(puns) {


    function doScaledTimeout(i) {
        setTimeout(function() {
            tweetIt(i)
            //warning(i)
        }, i * 1000 * 60 * 60 * 24);
    }
    for (var i = 1; i <= 210; i++){
        doScaledTimeout(i);
      }

    console.log(puns)
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

    function warning(i) {
        {
            var tweet = {
                status: 'Beep Boop, I am a pun bot, I was created by my handsome master Anu to tweet a pun every 24 hours. That was pun ' + i +'. Boop Beep.'
            }
        }
        T.post('statuses/update', tweet, tweeted);

        function tweeted(err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log("Warning worked!");
            }
        }
    }


})
