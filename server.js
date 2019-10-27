require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require ('passport-auth0');



const db = require('./models');

const PORT = process.env.PORT || 80;

const sess = {
    secret: 'test',
    cookie: {},
    resave: false,
    saveUninitialized: true
}

if (app.get('env') === 'production') {
    sess.cookie.secure = true;
}

app.use(session(sess));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('client/build'));


const strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:5000/callback'
    },
    function (accessToken, refreshToken, extraParams, profile, done) {
      // accessToken is the token to call Auth0 API (not needed in the most cases)
      // extraParams.id_token has the JSON Web Token
      // profile has all the information from the user
      return done(null, profile);
    }
  );

  passport.use(strategy);

  app.use(passport.initialize());
  app.use(passport.session());
  
  passport.serializeUser(function (user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

// app.js

const userInViews = require('./lib/middleware/userInViews');
const authRouter = require('./routes/auth');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// ..
app.use(userInViews());
app.use('/', authRouter);
app.use('/', indexRouter);
app.use('/', usersRouter);
// ..

const syncOptions = { force: true }

db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`)
    });
  });
  
  module.exports = app;