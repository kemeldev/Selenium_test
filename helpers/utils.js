const { until, By } = require("selenium-webdriver");

async function waitForElement(driver, locator, timeout = 5000) {
    return await driver.wait(until.elementLocated(locator), timeout);
}

async function scrollToElement(driver, element) {
    await driver.executeScript("arguments[0].scrollIntoView();", element);
}

module.exports = { waitForElement, scrollToElement };
