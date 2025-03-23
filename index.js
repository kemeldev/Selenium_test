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