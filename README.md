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
| Nombre del escenario | Funcionalidad |
| -------------------  | ------------- |
| Como usuario inicio sesión en ghost con datos válidos | Iniciar Sesión |
| Como primer usuario registro mi cuenta en ghost | Crear un Usuario |
| Como usuario registro una etiqueta en ghost con datos vacíos  | Crear una Etiqueta|
| Como usuario registro una etiqueta externa en ghost con datos validos |Crear una Etiqueta |
| Como usuario registro una etiqueta interna en ghost con datos validos |Crear una Etiqueta |
| Como usuario visualizo una etiqueta creada en ghost si existe al menos una |Ver todas las Etiquetas |
| Como usuario elimino una etiqueta en ghost si existe al menos una |Eliminar una Etiqueta   |
