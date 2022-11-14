# pruebas-e2e-grupo4

## Instalar aplicación sobre pruebas

Para esta instalación se requiere tener el Ghost-CLI instalado en la máquina

Abrir un terminal en la carpeta ghost

Ejecutar el siguiente script ubicado en la carpeta raiz del proyecto:
* `sh setup-ghost.sh`

Si se muestra un error relacionado con sqlite3 ejecutar
* `npm install sqlite3 --save`

Si ghost no se inicia automáticamente ejecutar
* `ghost start`

Luego de ejecutar el script, ghost empezará a ejecutar en el puerto `2368` del localhost. Asegurese que este puerto no esté ocupado.

## Ejecución de pruebas

Para ejecutar las pruebas de Kraken, seguir los siguiente pasos

1. Entrar a la carpeta de Kraken, desde la raiz del proyecto: `cd kraken`
2. Instalar las dependencias: `npm i`
3. Ejecutar los test: `npm test`
4. Se ejecutarán los test automáticamente iniciando con el registro por lo que es importante correrlos sobre una instalación limpia de ghost, puesto que el registro es una operación que se realiza una sola vez en la versión 3.41.1 de ghost utilizada

Para ejecutar las pruebas de Cypress, seguir los siguiente pasos

1. Entrar a la carpeta de Cypress, desde la raiz del proyecto: `cd cypress`
2. Instalar las dependencias: `npm i`
3. Ejecutar los test: `npm test`
4. Se ejecutarán los test automáticamente iniciando con el registro por lo que es importante correrlos sobre una instalación limpia de ghost, puesto que el registro es una operación que se realiza una sola vez en la versión 3.41.1 de ghost utilizada

## Funcionalidades a probar

* 1. Crear una Entrada  
* 2. Ver todas las Entradas  
* 3. Publicar una Entrada  
* 4. Eliminar una Entrada  
* 5. Crear una Etiqueta  
* 6. Eliminar una Etiqueta  
* 7. Ver todas las Etiquetas  
* 8. Crear un Usuario  
* 9. Crear una Página  
* 10. Agregar una imagen a una Página
* 11. Iniciar Sesión

## Escenarios
| Nombre del escenario                                                                 | Funcionalidades           |
|--------------------------------------------------------------------------------------|-------------------------|
| Como usuario inicio sesión en ghost con datos válidos                                | Iniciar Sesión          |
| Como primer usuario registro mi cuenta en ghost                                      | Crear un Usuario        |
| Como usuario registro una etiqueta en ghost con datos vacíos                         | Crear una Etiqueta      |
| Como usuario registro una etiqueta externa en ghost con datos validos                | Crear una Etiqueta      |
| Como usuario registro una etiqueta interna en ghost con datos validos                | Crear una Etiqueta      |
| Como usuario visualizo una etiqueta pública creada en ghost si existe al menos una   | Ver todas las Etiquetas |
| Como usuario visualizo una etiqueta interna creada en ghost si existe al menos una   | Ver todas las Etiquetas |
| Como usuario filtro las etiquetas y visualizo solamente las internas                 | Ver todas las etiquetas |
| Como usuario elimino una etiqueta en ghost si existe al menos una                    | Eliminar una Etiqueta   |
| Como usuario creo una página y validar que se agruegue al listado de páginas         | Crear una página        |
| Como usuario elimino una página y validar que se ya no este en el listado de páginas | Eliminar una página     |
| Como usuario agrego una imagen a una página y validar que se agrugue al formulario   | Agregar una imagen a una Página       |
| Como usuario creo una entrada y la publico inmediatamente, luego verifico que esté listada | Crear Entrada, Ver todas las Entradas |
| Como usuario actualizo una entrada, actualizar su titulo, luego verifico que esté listada | Actualizar Entrada, Ver todas las Entradas |
| Como usuario creo una entrada, la programo para publicación en 5 minutos y luego verifico que esté listada | Crear Entrada, Publicar Entrada, Ver todas las Entradas |
| Como usuario elimino una entrada, luego verifio que ya no esté listada | Eliminar Entrada, Ver todas las Entradas |
| Como usuario entro al listado de entradas y filtro por publicadas y por autor  | Ver todas las Entradas |
