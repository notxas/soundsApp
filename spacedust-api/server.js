//require('dotenv').config();
require('dotenv').config({
  path: 'api/.env'
});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const expressJwt = require('express-jwt');
const jwtDecode = require('jwt-decode');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Required if we serve our API at a
// different origin than the Angular app
app.use(cors()); // Cross-Origin Resource Sharing

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 3600000
    }
  })
);

const attachUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === 'Bearer null' || !token) {
    return res.status(401).json({
      message: 'Authentication invalid'
    });
  }
  const decodedToken = jwtDecode(token.replace('Bearer ', ''));

  if (!decodedToken) {
    return res
      .status(401)
      .json({
        message: 'There was a problem authorizing the request'
      });
  } else {
    req.user = decodedToken;
    next();
  }
};

app.get('/ping', (req, res) => {
  res.send('Hello world!');
});

const checkSession = (req, res, next) => {
  if (req.session.user && req.session.isAuthenticated) {
    next();
  } else {
    res.status(403).json({
      message: 'Unauthorized'
    });
  }
};

const checkJwt = expressJwt({
  secret: process.env.JWT_SECRET
});

// ----- Routes Not Requring Auth ------ //
// User routes
app.use('/api/users', require('./api/users'));

// Auth routes
app.use('/api/authenticate', require('./api/authenticate'));
app.use('/api/logout', require('./api/logout'));

// ----- Routes Requring Auth ------ //
app.use(attachUser);
// The authentication middleware is applied before
// the exoplanets endpoint so that it can be protected
app.use(checkJwt);

// Exoplanet routes
app.use('/api/exoplanets', require('./api/exoplanets'));

async function connect() {
  try {
    mongoose.Promise = global.Promise;
    await mongoose.connect(process.env.MLAB_URL);
  } catch (err) {
    console.log('Mongoose error', err);
  }
  app.listen(3000);
  console.log('API listening on localhost:3000');
}

connect();