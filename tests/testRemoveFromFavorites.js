const { Builder, By, until, Key, Actions } = require("selenium-webdriver");

async function testRemoveFromFavorites() {
    let driver = await new Builder().forBrowser("firefox").build();

    try {
        // Abrir la página de WatchTogether
        await driver.get("https://kemeldev.github.io/WatchTogether");

        // Agregar el primer elemento a favoritos
        // Hover sobre el primer elemento
        let hoverElement1 = await driver.findElement(By.xpath("/html/body/div/section/div/div[4]/div/div/a[2]/div/div/div[1]"));
        let actions = driver.actions();
        await actions.move({ origin: hoverElement1 }).perform();

        // Clic en el botón de agregar a favoritos
        let addToFavoritesButton1 = await driver.wait(
            until.elementLocated(By.xpath("/html/body/div/section/div/div[4]/div/div/a[2]/div/div/div[2]/div[3]")),
            10000
        );
        await addToFavoritesButton1.click();

        // Esperar unos segundos para que la interfaz se actualice
        await driver.sleep(2000);

        // Agregar el segundo elemento a favoritos
        // Hover sobre el segundo elemento
        let hoverElement2 = await driver.findElement(By.xpath("/html/body/div/section/div/div[4]/div/div/a[3]/div/div"));
        await actions.move({ origin: hoverElement2 }).perform();

        // Clic en el botón de agregar a favoritos
        let addToFavoritesButton2 = await driver.wait(
            until.elementLocated(By.xpath("/html/body/div/section/div/div[4]/div/div/a[3]/div/div/div[2]/div[3]")),
            10000
        );
        await addToFavoritesButton2.click();

        // Esperar unos segundos para que la interfaz se actualice
        await driver.sleep(2000);

        // Redirigirnos a la página de la lista de favoritos
        let favoritesLink = await driver.findElement(By.xpath("/html/body/div/div[1]/a/div[4]"));
        await favoritesLink.click();

        // Esperar a que cargue la página de la lista de favoritos
        await driver.wait(until.urlIs("https://kemeldev.github.io/yourList"), 10000);

        // Verificar si hay al menos dos elementos en la lista de favoritos
        let favoritesListDiv = await driver.wait(
            until.elementLocated(By.xpath("/html/body/div/div[2]/div")),
            10000
        );
        let favoriteItems = await favoritesListDiv.findElements(By.xpath("./*"));

        if (favoriteItems.length < 2) {
            console.error("❌ No se agregaron correctamente las películas a la lista de favoritos.");
            return;
        }

        console.log("✅ Se agregaron las dos películas a los favoritos.");

        // Hacer clic en el primer elemento de la lista para eliminarlo
        let removeElementButton = await driver.findElement(By.xpath("/html/body/div/div[2]/div/div[1]/div/div[2]/div[2]"));
        await removeElementButton.click();

        // Esperar unos segundos para que el elemento sea eliminado
        await driver.sleep(2000);

        // Verificar que el número de elementos en la lista haya disminuido
        let updatedFavoriteItems = await favoritesListDiv.findElements(By.xpath("./*"));

        if (updatedFavoriteItems.length === 1) {
            console.log("✅ Se eliminó un elemento de la lista de favoritos.");
        } else {
            console.error("❌ No se eliminó correctamente el elemento de la lista de favoritos.");
        }

    } catch (error) {
        console.error("❌ Error en la prueba:", error);
    } finally {
        // 🔟 Esperar 2 segundos antes de cerrar el navegador
        await driver.sleep(2000);

        // Cerrar el navegador
        await driver.quit();
        console.log("Caso de prueba 6 terminado");
    }
}

// Ejecutar la prueba individual
// testRemoveFromFavorites();

module.exports = { testRemoveFromFavorites };
