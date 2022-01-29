const serverless = require('serverless-http');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello to serverless API' });
});

app.get('/api/info', (req, res) => {
  res.send({ application: 'serverless-api', version: '1.0.0' });
});

app.post('/api/v1/post', (req, res) => {
  res.send({ ...req.body });
});

//app.listen(5000, () => console.log(`Listening on: 5000`));
module.exports.handler = serverless(app);

