const { Builder, By, until, Key, Actions } = require("selenium-webdriver");

async function testHoverChangeBackground() {
    let driver = await new Builder().forBrowser("firefox").build();

    try {
        //  Abrir la página de WatchTogether
        await driver.get("https://kemeldev.github.io/WatchTogether");

        // Esperar a que la página cargue completamente
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/section/div/div[4]/div/div/a[1]/div/div/div[1]")), 10000);

        // Localizar el elemento sobre el que se hará hover
        let hoverElement = await driver.findElement(By.xpath("/html/body/div/section/div/div[4]/div/div/a[1]/div/div/div[1]"));

        // Hacer hover sobre el elemento
        let actions = driver.actions();
        await actions.move({ origin: hoverElement }).perform();

        // Esperar unos segundos para ver el cambio de fondo
        await driver.sleep(2000);  // Esperar 2 segundos

        // Verificar si la imagen de fondo ha cambiado
        let backgroundImageElement = await driver.findElement(By.xpath("/html/body/div/section/div/div[1]/div/img"));
        let backgroundImageUrl = await backgroundImageElement.getAttribute("src");

        // Verificar que la imagen de fondo no sea la inicial (esto asume que la imagen cambia)
        if (backgroundImageUrl !== "URL_INICIAL_DE_LA_IMAGEN_DE_FONDO") {
            console.log("✅ La imagen de fondo cambió correctamente.");
        } else {
            console.error("❌ La imagen de fondo no cambió.");
        }

    } catch (error) {
        console.error("❌ Error en la prueba:", error);
    } finally {
        // Esperar 2 segundos antes de cerrar el navegador
        await driver.sleep(2000);

        // Cerrar el navegador
        await driver.quit();
        console.log("Caso de prueba 3 terminado");
    }
}

// Ejecutar la prueba
// testHoverChangeBackground();

module.exports = { testHoverChangeBackground };
