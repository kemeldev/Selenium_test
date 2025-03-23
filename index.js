// const {Builder, By, Key, until} = require("selenium-webdriver")

// Testing selenium, una prueba para ver si el  
// async function example() {
//     let driver = await new Builder().forBrowser("firefox").build();
//     await driver.get("http://google.com");
//     await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN)

// }
// example();

// Caso de preuba 1 

// async function testClickViewDetails() {
//     let driver = await new Builder().forBrowser("firefox").build();

//     try {
//         // 1️⃣ Abrir la página de WatchTogether
//         await driver.get("https://kemeldev.github.io/WatchTogether");

//         // 2️⃣ Esperar a que la clase "popular_textContent" esté visible (en lugar de esperar el título)
//         let popularTextContent = await driver.wait(
//             until.elementLocated(By.className("popular_textContent")),
//             10000
//         );

//         // 3️⃣ Desplazar hacia abajo hasta la clase "popular_textContent"
//         await driver.executeScript("arguments[0].scrollIntoView();", popularTextContent);

//         // 4️⃣ Esperar unos segundos para que se vea más natural
//         await driver.sleep(2000);  // Esperar 2 segundos

//         // 5️⃣ Esperar a que el botón esté presente y hacer clic
//         let button = await driver.wait(
//             until.elementLocated(By.xpath("//div[contains(@class, 'popular_textContent')]//a/button")), 
//             7000
//         );

//         // 6️⃣ Hacer clic en el botón
//         await button.click();

//         console.log("✅ Se hizo clic en el botón 'View details' correctamente.");
//     } catch (error) {
//         console.error("❌ Error en la prueba:", error);
//     } finally {
//         // 7️⃣ Esperar 2 segundos antes de cerrar el navegador
//         await driver.sleep(2000);  // Esperar 2 segundos para que se vea más natural antes de cerrar

//         // Cerrar el navegador
//         await driver.quit();
//         console.log("Caso de prueba 1 terminado");
//     }
// }


// async function testPlayTrailer() {
//     let driver = await new Builder().forBrowser("firefox").build();

//     try {
//         // 1️⃣ Abrir la página de WatchTogether
//         await driver.get("https://kemeldev.github.io/WatchTogether");

//         // 2️⃣ Esperar a que el botón 'View details' esté presente y hacer clic
//         let button = await driver.wait(
//             until.elementLocated(By.xpath("//div[contains(@class, 'popular_textContent')]//a/button")),
//             7000
//         );

//         // Desplazar hacia abajo y hacer clic en el botón
//         await driver.executeScript("arguments[0].scrollIntoView();", button);
//         await driver.sleep(2000);  // Esperar unos segundos para que se vea natural
//         await button.click();

//         // 3️⃣ Esperar a que la página de detalles cargue
//         await driver.wait(until.urlIs("https://kemeldev.github.io/details/1396"), 10000);

//         // 4️⃣ Esperar a que el botón para reproducir el trailer esté visible
//         let playButton = await driver.wait(
//             until.elementLocated(By.className("overview_playTrailer")),
//             7000
//         );

//         // 5️⃣ Desplazar hacia abajo hasta el botón para asegurarse de que sea visible
//         await driver.executeScript("arguments[0].scrollIntoView();", playButton);

//         // 6️⃣ Hacer clic en el botón para reproducir el trailer
//         await playButton.click();

//         // 7️⃣ Esperar un poco más para que el iframe del video cargue
//         await driver.sleep(3000);  // Esperar 3 segundos para dar tiempo a que el reproductor cargue

//         // 8️⃣ Usar el XPath exacto que encontraste para localizar el iframe
//         let iframe = await driver.wait(
//             until.elementLocated(By.xpath("/html/body/div/section[1]/div[2]/div/article[1]/div[1]/div")),
//             10000  // Esperar hasta 10 segundos
//         );

//         // 9️⃣ Comprobar si el iframe está presente
//         if (iframe) {
//             console.log("✅ El reproductor se abrió correctamente.");
//         } else {
//             console.error("❌ El reproductor no se encontró.");
//         }

//     } catch (error) {
//         console.error("❌ Error en la prueba:", error);
//     } finally {
//         // 🔟 Esperar 2 segundos antes de cerrar el navegador
//         await driver.sleep(2000);  // Esperar 2 segundos para que se vea más natural antes de cerrar

//         // Cerrar el navegador
//         await driver.quit();
//         console.log("Caso de prueba 2 terminado");
//     }
// }

// Ejecutar la prueba 1
// testClickViewDetails();

// Ejecutar la prueba 2
// testPlayTrailer();

const { testClickViewDetails } = require('./tests/testClickViewDetails');
const { testPlayTrailer } = require('./tests/testPlayTrailer');
const { testHoverChangeBackground } = require('./tests/testHoverChangeBackground');
const { testAddToFavorites } = require('./tests/testAddToFavorites');
const { testFavoritesList } = require('./tests/testFavoritesList');
const { testRemoveFromFavorites } = require('./tests/testRemoveFromFavorites');

async function runTests() {
    // Ejecutar las pruebas en orden
    await testClickViewDetails();
    await testPlayTrailer();
    await testHoverChangeBackground();
    await testAddToFavorites();
    await testFavoritesList();
    await testRemoveFromFavorites();
}

runTests();