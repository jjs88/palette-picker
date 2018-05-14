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

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('listening on port:', port);
});