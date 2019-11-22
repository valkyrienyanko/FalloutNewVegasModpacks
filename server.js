const express = require('express');
const app = express();
const request = require('request');

require('dotenv').config()

app.use('/', express.static('public'));

app.get('/mods/:modID', function(req, res) {
  const id = req.params.modID;
  
  const options = {
    url: 'https://api.nexusmods.com/v1/games/newvegas/mods/' + id + '.json',
    method: 'GET',
    headers: {
      apikey: process.env.APIKEY
    }
  }
  
  request(options, function (nexusErr, nexusRes, nexusBody) {
    res.send(nexusBody.replace(/<(.|\n)*?>/g, ''));
  })
});

const port = 4000;
const server = app.listen(port);
console.log('Listening on port ' + port);