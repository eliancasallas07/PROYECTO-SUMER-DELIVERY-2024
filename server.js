// Cargar las variables de entorno del archivo .env
require('dotenv').config();

// Importar los módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet'); // Añadir esta línea
const { MongoClient, ServerApiVersion } = require('mongodb');

// Inicializar la aplicación Express
const app = express();
const port = 3000;

// Cadena de conexión a MongoDB Atlas desde las variables de entorno
const uri = process.env.MONGODB_URI; // Aquí se carga la URI desde el archivo .env
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Middleware para analizar los datos del cuerpo de la solicitud
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Middleware para configurar la política de seguridad de contenido (CSP)
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "http://localhost:3000"], // Permite imágenes de localhost y otros orígenes necesarios
      scriptSrc: ["'self'", "https://trusted.cdn.com"], // Ajusta según los orígenes de scripts que necesites
      styleSrc: ["'self'", "https://trusted.cdn.com"], // Ajusta según los orígenes de estilos que necesites
      connectSrc: ["'self'", "http://localhost:3000"], // Permite conexiones de localhost
      // Agrega otras directivas según tus necesidades
    }
  }
}));

// Función para conectar al cliente MongoDB
async function connectToMongo() {
  try {
    await client.connect();
    console.log("Conectado a MongoDB Atlas");
  } catch (error) {
    console.error("Error al conectar a MongoDB Atlas", error);
  }
}

// Conectar al cliente MongoDB
connectToMongo();

// Ruta para mostrar el formulario HTML
app.get('/crear-usuario', (req, res) => {
  res.sendFile(__dirname + '/public/crearusuario.html'); // Ruta corregida
});

// Ruta para manejar el formulario de creación de usuarios
app.post('/create-user', async (req, res) => {
  const { nombre, email, movieId, texto, fecha } = req.body;

  const documento = {
    nombre,
    email,
    movie: { id: movieId },
    texto,
    fecha: new Date(fecha) // Convertir la fecha en un objeto Date
  };

  try {
    const database = client.db('MiBaseDeDatos'); // Reemplaza con tu base de datos
    const collection = database.collection('Usuarios'); // Reemplaza con tu colección
    const resultado = await collection.insertOne(documento);
    res.send(`Usuario creado con el _id: ${resultado.insertedId}`);
  } catch (error) {
    res.status(500).send("Error al insertar el usuario");
    console.error("Error al insertar el usuario", error);
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});