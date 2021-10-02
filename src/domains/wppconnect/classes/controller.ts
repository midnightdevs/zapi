import { FastifyReply, FastifyRequest } from 'fastify';

export default class WppconnectController {
  static greet(request: FastifyRequest, reply: FastifyReply): FastifyReply {
    return reply.send({ msg: 'Hello zAPI' });
  }
}
