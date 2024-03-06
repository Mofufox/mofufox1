const path = require('path');

const express = require('express');

const homeRoutes = require('./routes/home.routes');
const impressumRoutes = require('./routes/impressum.routes');
const datenschutzRoutes = require('./routes/datenschutz.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/products/assets', express.static('product-data'));
// app.use(express.urlencoded({ extended: false }));

app.use(homeRoutes);
app.use(impressumRoutes);
app.use(datenschutzRoutes);

app.use((req, res) => {
  res.status(404);
  res.send(
    `<h1 style="font-family: Arial, Helvetica, sans-serif;">Error 404: Resource not found. <br>Use the url http://localhost:3000 to go the the main page.</h1>`
  );
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
