const { createDriver } = require('../helpers/driver');
const { waitForElement, scrollToElement } = require('../helpers/utils');
const { By } = require("selenium-webdriver");

async function testClickViewDetails() {
    let driver = await createDriver();

    try {
        // Abrir la página de WatchTogether
        await driver.get("https://kemeldev.github.io/WatchTogether");

        // Esperar a que el elemento 'popular_textContent' esté visible
        let popularTextContent = await waitForElement(driver, By.className("popular_textContent"));

        // Desplazar hacia abajo hasta el elemento 'popular_textContent'
        await scrollToElement(driver, popularTextContent);

        // Esperar unos segundos para que se vea más natural
        await driver.sleep(2000);  // Esperar 2 segundos

        //  Esperar a que el botón 'View details' esté presente
        let button = await waitForElement(driver, By.xpath("//div[contains(@class, 'popular_textContent')]//a/button"));

        // Hacer clic en el botón
        await button.click();

        console.log("✅ Se hizo clic en el botón 'View details' correctamente.");
    } catch (error) {
        console.error("❌ Error en la prueba:", error);
    } finally {
        // Esperar 2 segundos antes de cerrar el navegador
        await driver.sleep(2000);

        // Cerrar el navegador
        await driver.quit();
        console.log("Caso de prueba 1 terminado");
    }
}

module.exports = { testClickViewDetails };