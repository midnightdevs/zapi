import WppClient from '@Core/clients/wppclient';
export default class WhatsappController {
  constructor(session = 'session1') {
    console.log('\n\nRunning Constructor\n\n');
    this.wppSession = new WppClient('test');
    this.phone_number = process.env.TEST_PHONE_NUMBER;
  }

  greet(request, reply) {
    return reply.send({ message: 'Hello' }).status(200);
  }

  startSession(request, reply) {
    return reply.send({ message: 'session started' }).status(200);
  }

  async sendMessage(request, reply) {
    await this.wppSession.client.then((client) => {
      client
        .sendText(`${this.phone_number}@c.us`, '👋 Hello from wppconnect!')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    });
    return reply.send({ message: 'ok' }).status(200);
  }
}
