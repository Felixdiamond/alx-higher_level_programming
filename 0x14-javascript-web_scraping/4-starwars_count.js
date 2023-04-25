#!/usr/bin/node
const request = require('request');

const url = process.argv[2];
const characterId = '18';

request(url, function (error, response, body) {
if (error) {
console.error(error);
} else {
const movies = JSON.parse(body).results;
const count = movies.filter(movie => movie.characters.some(characterUrl => characterUrl.includes(characterId))).length;
console.log(count);
}
});
