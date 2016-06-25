var opener = require('opener');
process.on('uncaughtException', function (err) {
    opener('https://encrypted.google.com/search?pws=0&safe=off&num=100&complete=0&q=' + encodeURIComponent(err));
});
