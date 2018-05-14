const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./db');
const generatePalette = require('./generatePalette');
const routes = require('./routes');



// middleware for handling post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', routes);

if(process.env.NODE_ENV === 'production') {
  //express will serve up production assets
  app.use(express.static('client/build'));
  //express will serve up the index.html file if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('listening on port:', port);
});