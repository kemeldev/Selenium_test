const { createDriver } = require('../helpers/driver');
const { waitForElement, scrollToElement } = require('../helpers/utils');
const { Builder, By, until } = require("selenium-webdriver");

async function testPlayTrailer() {
    let driver = await createDriver();

    try {
        // Abrir la página de WatchTogether
        await driver.get("https://kemeldev.github.io/WatchTogether");

        // Esperar a que el botón 'View details' esté presente y hacer clic
        let button = await waitForElement(driver, By.xpath("//div[contains(@class, 'popular_textContent')]//a/button"));
        await scrollToElement(driver, button);
        await driver.sleep(2000);
        await button.click();

        // Esperar a que la página de detalles cargue
        await driver.wait(until.urlIs("https://kemeldev.github.io/details/1396"), 10000);

        // Esperar a que el botón para reproducir el trailer esté visible
        let playButton = await waitForElement(driver, By.className("overview_playTrailer"));

        // Desplazar hacia abajo hasta el botón para asegurarse de que sea visible
        await scrollToElement(driver, playButton);

        // Hacer clic en el botón para reproducir el trailer
        await playButton.click();

        // Esperar un poco más para que el iframe del video cargue
        await driver.sleep(3000);

        // Usar el XPath exacto para localizar el iframe
        let iframe = await waitForElement(driver, By.xpath("/html/body/div/section[1]/div[2]/div/article[1]/div[1]/div"));

        // Comprobar si el iframe está presente
        if (iframe) {
            console.log("✅ El reproductor se abrió correctamente.");
        } else {
            console.error("❌ El reproductor no se encontró.");
        }

    } catch (error) {
        console.error("❌ Error en la prueba:", error);
    } finally {
        // Esperar 2 segundos antes de cerrar el navegador
        await driver.sleep(2000);

        // Cerrar el navegador
        await driver.quit();
        console.log("Caso de prueba 2 terminado");
    }
}

module.exports = { testPlayTrailer };
