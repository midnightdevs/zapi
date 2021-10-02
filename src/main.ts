import fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();

const server = fastify();

server.get('/', (request, reply) => {
  void reply.send({ message: 'KORREKT' }).status(200);
});

const serverConfig = {
  port: process.env.API_PORT || 3000,
  address: process.env.API_HOST || "0.0.0.0",
};

server.listen(serverConfig.port, serverConfig.address, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`)
});