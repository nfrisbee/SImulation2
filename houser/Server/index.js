const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const controller = require('./controller.js');
const massive = require('massive');
require('dotenv').config({path: '../.env'}); 


//Massive
let {
    DATABASE_CONNECTION
} = process.env;

massive(DATABASE_CONNECTION, {scripts: '../db'}).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Connected!')
}).catch(error => {
    console.log(DATABASE_CONNECTION)
    console.log('Db not connected:', error);
});



//endpoints
app.get(`/api/houselist`, controller.getHouseList)

app.post(`/api/houseinfo`, controller.getHouseInfo)


//Listen to port 5000
app.listen(5000, function () {
    console.log('Listening closely on port 5000!');
});