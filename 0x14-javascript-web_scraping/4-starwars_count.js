#!/usr/bin/node
const request = require('request');

// Get the API URL from the command-line arguments
const url = process.argv[2];

// ID of the character "Wedge Antilles"
const characterId = 18;
const characterUrl = `https://swapi-api.alx-tools.com/api/people/${characterId}/`;
// Make a request to the movies API endpoint
request.get(url, (error, response, body) => {
  if (error) {
    return;
  }
  if (response.statusCode !== 200) {
    return;
  }

  // Parse the response body as JSON
  const moviedataContent = JSON.parse(body);

  // Filter the movies based on the presence of the character "Wedge Antilles"
  const characterMovies = moviedataContent.results.reduce((count, movie) => {
    return movie.characters.includes(characterUrl) ? count + 1 : count;
  }, 0);

  // Print the total number of movies where "Wedge Antilles" appears
  console.log(characterMovies);
});
