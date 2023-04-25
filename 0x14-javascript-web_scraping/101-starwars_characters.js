#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const charactersUrls = JSON.parse(body).characters;
  const charactersPromises = charactersUrls.map((url) => {
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (error) reject(error);
        else resolve(JSON.parse(body).name);
      });
    });
  });
  Promise.all(charactersPromises).then((characters) => {
    console.log(characters.join('\n'));
  }).catch((error) => {
    console.error(error);
  });
});
