// Ejemplo de contenido para mongorc.js
db = db.getSiblingDB('miBaseDeDatos');
print("Conectado a la base de datos: " + db);

db.createCollection("usuarios");