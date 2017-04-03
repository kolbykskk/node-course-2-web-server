const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('welcome.hbs', {
    pageTitle: 'Welcome Page',
    welcomeMessage: 'Thank you for stopping by!'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Oops! There\'s an error!'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
