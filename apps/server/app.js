const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const client = redis.createClient();

const searchRouter = require('./routes/searchRouter')(client);
const clearCacheRouter = require('./routes/clearCacheRouter')(client);

const options = {
  swaggerDefinition: {
    info: {
      title: 'Tradeling Task',
      version: '1.0.0',
      description: 'Tradeling task swagger documentation',
    },
  },
  apis: ['./routes/*.js'],
};
const specs = swaggerJsdoc(options);

client.on('connect', () => {
  console.log('You are now connected');
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  next();
});
app.use('/api', searchRouter);
app.use('/api', clearCacheRouter);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(4242, () => console.log('listening on port 4242...'));
