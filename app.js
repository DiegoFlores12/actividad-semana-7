const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const puerto = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'presentation', 'assets')));

app.use(session({
  secret: 'clave-simple',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 30
  }
}));

function revisarSesion(req, res, next) {
  if (req.session.usuario) {
    next();
  } else {
    console.log('Acceso denegado');
    res.redirect('/?error=Debes iniciar sesion primero');
  }
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'presentation', 'index.html'));
});

app.post('/login', (req, res) => {
  const usuario = req.body.usuario;
  const clave = req.body.clave;

  if (usuario === 'usuario' && clave === 'si123') {
    req.session.usuario = usuario;
    console.log('Inicio de sesion correcto:', usuario);
    res.redirect('/privado');
  } else {
    console.log('Intento fallido de login');
    res.redirect('/?error=Usuario o clave incorrecta');
  }
});

app.get('/privado', revisarSesion, (req, res) => {
  console.log('Usuario entro a la zona privada:', req.session.usuario);
  res.sendFile(path.join(__dirname, 'presentation', 'privado.html'));
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    console.log('Sesion cerrada');
    res.redirect('/?mensaje=Sesion cerrada');
  });
});

app.listen(puerto, () => {
  console.log('Servidor iniciado en http://localhost:' + puerto);
  console.log('HTTPS: en local se usa HTTP, pero en un servidor real se debe usar HTTPS');
});
