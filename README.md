# Alocado setup bicéfalo para que Omar pueda corregir el Sprint 4.2

Este repositorio contiene dos subcarpetas: `sequelize` y `mongoose`, cada una con una versión diferente de la API REST creada con Node.js y Express.js.

Para ejecutar la versión con Sequelize, sigue estos pasos:

1. Abre una terminal y navega hasta la raíz del repositorio.
2. Ejecuta el siguiente comando:

    npm run sequelize

3. Este comando ejecutará el script `"sequelize"` definido en el archivo `package.json`que contiene ambas subcarpetas. Este script primero navegará hasta la subcarpeta `sequelize` con el comando `cd sequelize`, luego instalará las dependencias de esta versión de la API con `npm install`, y finalmente iniciará la API con `npm start`.

Para ejecutar la versión con Mongoose, sigue estos pasos:

1. Abre una terminal y navega hasta la raíz del repositorio.
2. Ejecuta el siguiente comando:

    npm run mongoose

3. Este comando ejecutará el script `"mongoose"` definido en el archivo `package.json`que, como hemos indicado antes, contiene ambas subcarpetas. Este script primero navegará hasta la subcarpeta `mongoose` con el comando `cd mongoose`, luego instalará las dependencias de esta versión de la API con `npm install`, y finalmente iniciará la API con `npm start`.

## Environtment variables

Para que la API funcione correctamente, es necesario definir las variables de entorno que, tanto en la versión con Sequelize como en la versión con Mongoose, se encuentran ejemplificadas en el archivo '.env-template- que se encuentra en la raíz de cada subcarpeta. Para definir las variables de entorno, copia el contenido del archivo `.env-template` en un nuevo archivo llamado `.env` y rellena los valores de las variables.

## Cómo funciona sequelize

La versión de la API con Sequelize se encuentra en la subcarpeta `sequelize`. Esta versión de la API utiliza la librería [Sequelize](https://sequelize.org/) para interactuar con la base de datos. Sequelize es un ORM (Object Relational Mapper) que permite interactuar con una base de datos relacional como si fuera una base de datos no relacional. En este caso, Sequelize interactúa con una base de datos MySQL.

## Cómo funciona mongoose

La versión de la API con Mongoose se encuentra en la subcarpeta `mongoose`. Esta versión de la API utiliza la librería [Mongoose](https://mongoosejs.com/) para interactuar con la base de datos. Mongoose es un ODM (Object Document Mapper) que permite interactuar con una base de datos no relacional como si fuera una base de datos relacional. En este caso, Mongoose interactúa con una base de datos MongoDB.


Los respectivos endpoints de cada API se encuentran en sus respectivos docuemntos README.md

## Postman

Para probar la API, puedes utilizar el archivo `API REST.postman_collection.json` que se encuentra en la raíz de cada subcarpeta. Este archivo contiene una colección de Postman con las peticiones necesarias para probar la API.
El token para probar el endpoint '/login' debe añadirse en la pestaña de Authorization de Postman, en el apartado de Type, seleccionando 'Bearer Token' y en el campo de Token, introduciendo el token que se genera al hacer login.
