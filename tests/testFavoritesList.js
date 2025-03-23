const { Builder, By, until, Key, Actions } = require("selenium-webdriver");

async function testFavoritesList() {
    let driver = await new Builder().forBrowser("firefox").build();

    try {
        // Abrir la página de WatchTogether
        await driver.get("https://kemeldev.github.io/WatchTogether");

        // Esperar a que la página cargue completamente
        await driver.wait(until.elementLocated(By.xpath("/html/body/div/section/div/div[4]/div/div/a[4]/div/div/div[1]")), 10000);

        // Localizar el elemento sobre el que se hará hover
        let hoverElement = await driver.findElement(By.xpath("/html/body/div/section/div/div[4]/div/div/a[4]/div/div/div[1]"));

        // Hacer hover sobre el elemento
        let actions = driver.actions();
        await actions.move({ origin: hoverElement }).perform();

        // Esperar a que se despliegue el botón de agregar a favoritos
        let addToFavoritesButton = await driver.wait(
            until.elementLocated(By.xpath("/html/body/div/section/div/div[4]/div/div/a[4]/div/div/div[2]/div[3]")),
            10000
        );

        // Hacer clic en el botón de agregar a favoritos
        await addToFavoritesButton.click();

        // Esperar unos segundos para que la notificación de favoritos se actualice
        await driver.sleep(2000); // Esperar 2 segundos para que la interfaz se actualice

        // Verificar si la notificación de favoritos aparece y el número cambia
        let favoritesNotification = await driver.findElement(By.xpath("/html/body/div/div[1]/a/div[4]/div"));
        let favoritesCountText = await favoritesNotification.getText();

        // Comprobar si el número de favoritos ha cambiado o si la notificación aparece
        if (favoritesCountText === "2" || favoritesCountText === "1") {
            console.log("✅ La película se agregó a los favoritos correctamente.");
        } else {
            console.error("❌ La película no se agregó a los favoritos correctamente.");
        }

        // Hacer clic en el ícono de favoritos para ir a la página de la lista de favoritos
        let favoritesLink = await driver.findElement(By.xpath("/html/body/div/div[1]/a/div[4]"));
        await favoritesLink.click();

        // Esperar a que cargue la página de la lista de favoritos
        await driver.wait(until.urlIs("https://kemeldev.github.io/yourList"), 10000);

        // Verificar si en la página de favoritos existe al menos un elemento hijo en el div
        let favoritesListDiv = await driver.wait(
            until.elementLocated(By.xpath("/html/body/div/div[2]/div")),
            10000
        );

        // Obtener los hijos del div y comprobar si hay al menos uno
        let childElements = await favoritesListDiv.findElements(By.xpath("./*"));

        // Verificar si hay al menos un hijo
        if (childElements.length > 0) {
            console.log("✅ Se ha agregado una película a la lista de favoritos.");
        } else {
            console.error("❌ No se ha agregado ninguna película a la lista de favoritos.");
        }

    } catch (error) {
        console.error("❌ Error en la prueba:", error);
    } finally {
        // Esperar 2 segundos antes de cerrar el navegador
        await driver.sleep(2000);

        // Cerrar el navegador
        await driver.quit();
        console.log("Caso de prueba 5 terminado");
    }
}

// Ejecutar la prueba
// testFavoritesList();
module.exports = { testFavoritesList };
