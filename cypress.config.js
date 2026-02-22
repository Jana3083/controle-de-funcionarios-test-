const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Configurações para geração dos relatórios (mochawesome)
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: false,
    },
    // Configurações de evidências
    video: true, // grava vídeos automaticamente
    screenshotsFolder: "cypress/screenshots", // pasta para screenshots
    videosFolder: "cypress/videos", // pasta para vídeos
  },
});
