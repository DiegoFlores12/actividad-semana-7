Etapa 1: Creación del Backend

En esta etapa se creó la base del servidor usando Node.js con Express.

Contenidos principales:
Se creó un servidor básico que permite levantar la aplicación en el navegador.
Se configuraron rutas simples para manejar el inicio de sesión.
Se utilizó Express para facilitar la creación del servidor.

Características técnicas:
Uso de Express para crear el servidor.
Configuración de rutas GET y POST.
Servidor ejecutándose en un puerto local (ej: 3000).

Etapa 2: Desarrollo de app.js

En esta etapa se desarrolló el archivo principal del backend, donde ocurre toda la lógica.

Funcionalidad:
Se creó la ruta para mostrar el formulario de login.
Se creó la ruta para procesar el inicio de sesión.
Se validan los datos ingresados por el usuario.

Lógica aplicada:
Se comparan los datos ingresados con un usuario fijo.
Si los datos coinciden → acceso permitido.
Si no coinciden → acceso denegado.

También se agregó:
Uso básico de sesiones o cookies (simple, sin mucha complejidad).
Mensajes de respuesta en pantalla.
Registro en consola para ver lo que pasa (logs).

Etapa 3: Configuración de seguridad (básica)

En esta etapa se agregó una forma simple de seguridad.

Implementación:
Validación de usuario y contraseña.
Simulación de sesión para mantener el estado del usuario.

IMPORTANTE (credenciales usadas):
Usuario: usuario
Contraseña: si123

Estas credenciales están escritas directamente en el código (forma simple, no profesional).

Etapa 4: Archivo package.json

En esta etapa se configuraron las dependencias del proyecto.

Contenidos principales:
Se inicializó el proyecto con npm.
Se instalaron librerías necesarias como Express.

Dependencias utilizadas:
express → para crear el servidor
(otras pueden estar, pero se dejaron las mínimas necesarias)

Funcionalidad:
Permite ejecutar el proyecto con comandos como:
npm install
npm start

Etapa 5: Funcionamiento general

Flujo del sistema:
El usuario entra a la página.
Ingresa usuario y contraseña.
El servidor recibe los datos.
Se validan con los datos guardados.

Resultados:
Si son correctos → entra al sistema
Si son incorrectos → muestra error

Etapa 6: Simplificación del código

Se eliminaron cosas innecesarias como:
Estructuras complejas (controladores, servicios, etc.)
Validaciones avanzadas
Encriptación de contraseñas
Configuraciones extras

Se dejó:
Código directo en un solo archivo (app.js)
Lógica simple
Fácil de entender para alguien que está aprendiendo
