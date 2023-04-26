#!/usr/bin/node
const request = require('request');

// Get the API URL from the command-line arguments
const url = process.argv[2];

// ID of the character "Wedge Antilles"
const characterId = 18;

// API endpoint for Wedge Antilles character information
const characterApiUrl = `https://swapi-api.alx-tools.com/api/people/${characterId}/`;

// Make a request to the films API endpoint
request.get(url, (error, response, body) => {
  if (error) {
    // Handle errors
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    // Handle non-200 HTTP response codes
    console.error(`Unexpected response status code: ${response.statusCode}`);
    return;
  }

  // Parse the response body as JSON
  const filmsData = JSON.parse(body);

  // Filter the films based on the presence of the character "Wedge Antilles"
  const numFilmsWithWedgeAntilles = filmsData.results.reduce((count, film) => {
    return film.characters.includes(characterApiUrl) ? count + 1 : count;
  }, 0);

  // Print the total number of films where "Wedge Antilles" appears
  console.log(numFilmsWithWedgeAntilles);
});
