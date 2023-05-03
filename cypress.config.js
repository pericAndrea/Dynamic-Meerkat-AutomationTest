const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
      "baseUrl": "https://dynamic-meerkat-abbd3b.netlify.app/",
      "specPattern": "cypress/integration/**/*.js",
      "chromeWebSecurity": false,"viewportWidth": 1280,
      "viewportHeight": 800,
      "failOnStatusCode": false
  },
});
