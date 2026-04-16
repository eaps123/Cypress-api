const { defineConfig } = require('cypress')
installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter');

/**
 * @type {Cypress.PluginConfig}
 */
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('.', 'cypress/config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const file = config.env.configFile || 'canary'

      installLogsPrinter(on, {
        printLogsToConsole: "always",
      });

      return config, getConfigurationByFile(file);
    },
    
    "viewportWidth": 1366,
    "viewportHeight": 768,
    "defaultCommandTimeout": 30000,
    "chromeWebSecurity": false
  }
})