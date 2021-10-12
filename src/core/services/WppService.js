import WppClient from '@Core/clients/wppclient';
import Filters from '@Core/utility/filters';

export default class WppService extends WppClient {
  constructor(session = 'session1', phone = process.env.TEST_PHONE_NUMBER) {
    super(session);
    this.phone_number = phone;

    this.client.then((client) => {
      client.onMessage((msg) => {
        let replyMsg = 'Olá, como posso ajudar?';

        let msgHasBadWords = Filters.msgHasBadWords(msg.body);
        
        // implement strikes, after 3 user is blocked (somehow)
        if (msgHasBadWords) {
          replyMsg = 'Vou fingir que não entendi, pode dizer de novo?';
        }
        client
          .sendText(msg.from, replyMsg)
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      });
    });
  }
  sendMsg(phone, message) {
    this.client
      .sendText(phone, message)
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
  }
}
