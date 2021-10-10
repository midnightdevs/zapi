import { create, Whatsapp } from '@wppconnect-team/wppconnect';

export default class WppClient {
  constructor(sessionName = 'session1') {
    this.client = this.getSession(sessionName);
  }

  async getSession(session) {
    return await create({
      session: session,
      puppeteerOptions: { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] },
    })
      .then((client) => client)
      .catch((error) => console.log(error));
  }
}
