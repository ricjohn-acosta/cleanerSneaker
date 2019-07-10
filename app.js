/* Declare necessary node.js modules */
const express = require('express');
const app = express();

/* Connection to localhost or Heroku */
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server running on localhost:' + port);
})

/* Declare middlewares */
app.use(express.static('public'));
app.use

/* Implement EJS template */ 
app.set('view engine', 'ejs');

/* Declare routes */
const main = require('./controllers/mainRouter');
app.use('/',main);
