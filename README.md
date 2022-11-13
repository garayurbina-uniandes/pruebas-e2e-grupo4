# pruebas-e2e-grupo4

## Instalar aplicación sobre pruebas

Para esta instalación se requiere tener el Ghost-CLI instalado en la máquina

Abrir un terminal en la carpeta ghost

Ejecutar los siguientes comandos:
* ghost install --force 3.41.1 --local

Si se muestra un error relacionado con sqlite3 ejecutar
* npm install sqlite3 --save

Si luego de instalar no se ha iniciado la app, ejecutar
* ghost start

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
| Nombre del escenario                                                                 | Funcionalidad           |
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
| Como usuario creo una entrada, le asigno etiquetas y la publico inmediatamente, luego verifico que esté listada | Crear Entrada, Ver todas las Entradas |
| Como usuario actualizo una entrada, actualizar contenido y sus etiquetas, luego verifico que esté listada | Actualizar Entrada, Ver todas las Entradas |
| Como usuario creo una entrada, la programo para publicación en 5 minutos, espero ese tiempo y luego verifico que esté listada | Crear Entrada, Publicar Entrada, Ver todas las Entradas |
| Como usuario elimino una entrada, luego verifio que ya no esté listada | Eliminar Entrada, Ver todas las Entradas |
|Como usuario entro al listado de entradas y filtro por publicadas y por autor  | Ver todas las Entradas |