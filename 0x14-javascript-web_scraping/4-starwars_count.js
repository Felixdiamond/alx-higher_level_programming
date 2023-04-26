#!/usr/bin/node
const request = require('request');

// Get url and set characterId
const url = process.argv[2];
const characterId = '18';

// Make a request to the API
request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const movies = JSON.parse(body).results;
    const count = movies.filter(movie => movie.characters.some(characterUrl => characterUrl.includes(characterId))).length;
    console.log(count);
  }
});
