import WhatsappService from '@Domains/whatsapp/classes/service';
export default class WhatsappController {
  constructor(session = 'session1') {
    this.whatsappService = new WhatsappService('test');
  }

  greet(request, reply) {
    return reply.send({ message: 'Hello' }).status(200);
  }

  // TODO: session name per URL param
  startSession(request, reply) {
    return reply.send({ message: 'session started' }).status(200);
  }

  async sendMessage(request, reply) {
    this.whatsappService.sendMsg();
    return reply.send({ message: 'ok' }).status(200);
  }
}
