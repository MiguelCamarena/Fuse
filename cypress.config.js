// cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.booking.com',
    env: {
      language: 'en-us',
      searchCity: 'New York',
      routes: {
        home: '/',
        searchResults: '/searchresults.html',
        flights: '/flights'
      }
    }
  }
});
