import { create, Whatsapp } from '@wppconnect-team/wppconnect';

export default class WppClient {
  constructor(sessionName) {
    // TODO: session should be saved on a repository (db)
    this.session = this.getSession(sessionName);
    this.client = this.session.then((client) => client);
  }

  async getSession(session) {
    return await create({
      session: session,
      puppeteerOptions: { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] },
    })
      .then((session) => session)
      .catch((error) => console.log(error));
  }
}
