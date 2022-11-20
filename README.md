# pruebas-e2e-grupo4

## Instalar aplicación sobre pruebas

### Opción 1 de Instalación

Para esta instalación se requiere tener Docker instalado

Ejecutar los siguientes comandos en el terminal para instalar ghost versión 3.41.1 y versión 4.44.0

* Ghost 3.41.1
  ```bash
  docker run -d -e url=http://localhost:2368 -p 2368:2368 --name ghost_3.41.1 ghost:3.41.1
  ```
* Ghost 4.44.0
  ```bash
  docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0
  ```

## Ejecución de pruebas

### Para ejecutar las pruebas de Kraken, seguir los siguiente pasos

1. Entrar a la carpeta de Kraken, desde la raiz del proyecto:
  ```bash
  cd kraken
  ```
2. Instalar las dependencias:
  ```bash
  npm i
  ```
3. Ejecutar los test:
  ```bash
  npm test
  ```
4. Se ejecutarán los test automáticamente iniciando con el registro por lo que es importante correrlos sobre una instalación limpia de ghost, puesto que el registro es una operación que se realiza una sola vez en la versión 3.41.1 de ghost utilizada

### Para ejecutar las pruebas de Cypress, seguir los siguiente pasos

1. Entrar a la carpeta de Cypress, desde la raiz del proyecto:
  ```bash
  cd cypress
  ```
2. Instalar las dependencias:
  ```bash
  npm i
  ```
3. Ejecutar los test:
  ```bash
  npm test
  ```
4. Se ejecutarán los test automáticamente iniciando con el registro por lo que es importante correrlos sobre una instalación limpia de ghost, puesto que el registro es una operación que se realiza una sola vez en la versión 3.41.1 de ghost utilizada

### Reporte BackstopJS

A continuación se presentan las instrucciones para ejecutar el reporte generado por BackstopJS para comparación entre la versión 3.41.1 y 4.44.0 de Ghost para los escenarios E01, E02, E03, E04, E05, E06 y E08 (Kraken) y los escenarios E01, E02, E10, E11, E13, E15 y E17 (Cypress)

1. Ir a la carpeta de BackstopJS
  ```bash
  cd backstop/
  ```

2. Instalar BackstopJS
  ```bash
  npm install -g backstopjs
  ```

3. Guardar las imágenes de referencia
  ```bash
  backstop reference
  ```

4. Ejecutar pruebas y reporte
  ```bash
  backstop test
  ```

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
|Id| Nombre del escenario                                                                 | Funcionalidades           |
|---|--------------------------------------------------------------------------------------|-------------------------|
|E01| Como usuario inicio sesión en ghost con datos válidos                                | Iniciar Sesión          |
|E02| Como primer usuario registro mi cuenta en ghost                                      | Crear un Usuario        |
|E03| Como usuario registro una etiqueta en ghost con datos vacíos                         | Crear una Etiqueta      |
|E04| Como usuario registro una etiqueta externa en ghost con datos validos                | Crear una Etiqueta      |
|E05| Como usuario registro una etiqueta interna en ghost con datos validos                | Crear una Etiqueta      |
|E06| Como usuario visualizo una etiqueta pública creada en ghost si existe al menos una   | Ver todas las Etiquetas |
|E07| Como usuario visualizo una etiqueta interna creada en ghost si existe al menos una   | Ver todas las Etiquetas |
|E08| Como usuario filtro las etiquetas y visualizo solamente las internas                 | Ver todas las etiquetas |
|E09| Como usuario elimino una etiqueta en ghost si existe al menos una                    | Eliminar una Etiqueta   |
|E10| Como usuario creo una página y validar que se agruegue al listado de páginas         | Crear una página        |
|E11| Como usuario elimino una página y validar que se ya no este en el listado de páginas | Eliminar una página     |
|E12| Como usuario agrego una imagen a una página y validar que se agrugue al formulario   | Agregar una imagen a una Página       |
|E13| Como usuario creo una entrada y la publico inmediatamente, luego verifico que esté listada | Crear Entrada, Ver todas las Entradas |
|E14| Como usuario actualizo una entrada, actualizar su titulo, luego verifico que esté listada | Actualizar Entrada, Ver todas las Entradas |
|E15| Como usuario creo una entrada, la programo para publicación en 5 minutos y luego verifico que esté listada | Crear Entrada, Publicar Entrada, Ver todas las Entradas |
|E16| Como usuario elimino una entrada, luego verifio que ya no esté listada | Eliminar Entrada, Ver todas las Entradas |
|E17| Como usuario entro al listado de entradas y filtro por publicadas y por autor  | Ver todas las Entradas |
