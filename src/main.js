import fastify from 'fastify';
import 'dotenv/config';
import wppRouterV1 from '@Domains/whatsapp/router/v1';

const server = fastify({
  logger: {
    level: process.env.LOG_LEVEL || 'info',
  },
});

server.register(wppRouterV1, { prefix: '/v1' });

server.get('/', (request, reply) => {
  void reply.send({ message: 'KORREKT' }).status(200);
});

const serverConfig = {
  port: process.env.API_PORT || 3000,
  address: process.env.API_HOST || '0.0.0.0',
};

server.listen(serverConfig.port, serverConfig.address, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening at ${address}`);
});
