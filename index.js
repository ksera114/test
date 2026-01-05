const express = require('express');
const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const data = {
    id: uuidv4(),
    timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
    message: 'Hello World'
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
