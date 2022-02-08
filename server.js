const express = require('express');
const { cars } = require('./data/cars');

const app = express();



app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
