import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import WppconnectController from '@Domains/wppconnect/classes/controller';

export default (server: FastifyInstance, options: FastifyPluginOptions, next: CallableFunction): void => {
  server.get('/wpp', (request: FastifyRequest, reply: FastifyReply) => {
    void WppconnectController.greet(request, reply);
  });
  next();
};
