const express = require('express');
const routes = require('./routes.js');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(routes);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});

app.listen(process.env.PORT || 3001);