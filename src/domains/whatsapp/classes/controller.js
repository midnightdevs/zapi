export default class WhatsappController {
  static greet(request, reply) {
    return reply.send({ message: 'Hello' }).status(200);
  }
}
