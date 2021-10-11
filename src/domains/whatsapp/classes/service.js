import WppService from '@Core/services/WppService';

export default class WhatsappService extends WppService {
  constructor(session) {
    super(session);
  }

  sendMsg() {
    return this.client.then((client) => {
      client
        .sendText(`${this.phone_number}@c.us`, '👋 Hello from wppconnect!')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    });
  }
}
