const express = require('express')
const app = express();
const bodyParser = require('body-parser')


app.get('/', function (req, res) {
    res.send('Hello there! I am a cute lil server!');
});


//Listen to port 5000
app.listen(5000, function () {
    console.log('Listening closely on port 5000!');
});