const { Builder } = require("selenium-webdriver");

async function createDriver() {
    return await new Builder().forBrowser("firefox").build();
}

module.exports = { createDriver };
