const fastify = require('fastify')();
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const devMiddleware = require('webpack-dev-middleware');

const compiler = webpack(webpackConfig);
const { publicPath } = webpackConfig.output;

fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' });
});
fastify.listen(8888);
