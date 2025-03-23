# 🚀 Proyecto de Pruebas Automatizadas con Selenium y JavaScript  

Este repositorio contiene un conjunto de pruebas automatizadas para la plataforma **WatchTogether** utilizando **Selenium WebDriver** con **JavaScript (Node.js)**.  

## 📌 Requisitos Previos  

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes componentes:  

- [Node.js](https://nodejs.org/) (última versión recomendada)  
- [Git](https://git-scm.com/) (opcional, para clonar el repositorio)  
- **Selenium WebDriver** (con el driver correspondiente para el navegador a utilizar)  

## 🔧 Instalación y Configuración  

Iniciamos instalando Selenium webdriver 

npm install selenium-webdriver

Se Descarga e Instala el Driver del Navegador, para nuestro caso estamos usando GeckoDriver de Firefox, 

El mismo se puede descargar desde
🔗 https://github.com/mozilla/geckodriver/releases

Crea una carpeta en C:\ llamada seleniumWebDrivers y mueve el archivo geckodriver.exe ahí.

Agrega la ruta de esta carpeta a las variables de entorno del sistema:

Abre el menú de variables de entorno en Windows.
Busca la variable Path, edítala y agrega la ruta C:\seleniumWebDrivers.
Para verificar que el driver se agregó correctamente, abre una terminal y ejecuta:

start geckodriver

## 🚀 Ejecución del proyecto

git clone https://github.com/kemeldev/Selenium_test.git
cd Selenium_test
npm init -y
npm install selenium-webdriver
node index.js o bien el punto de entrada al proyecto según se configure

