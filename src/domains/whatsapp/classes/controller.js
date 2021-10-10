import WppClient from '@Core/clients/wppclient';
export default class WhatsappController {
  wppSession = new WppClient('test');

  static greet(request, reply) {
    return reply.send({ message: 'Hello' }).status(200);
  }

  static startSession(request, reply) {
    if (!this.wppSession) {
      console.log('\nI DO NOT HAVE AN INSTANCE\n');
      this.wppSession = new WppClient('test');
    }
    return reply.send({ message: 'session started' }).status(200);
  }

  static async sendMessage(request, reply) {
    if (!this.wppSession) {
      console.log('\nI DO NOT HAVE AN INSTANCE\n');
      this.wppSession = new WppClient('test');
    }
    await this.wppSession.client.then((client) => {
      client
        .sendText('+5548998680560@c.us', '👋 Hello from wppconnect!')
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
