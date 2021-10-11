import WhatsappController from '@Domains/whatsapp/classes/controller';

const whatsappController = new WhatsappController();

export default (server, options, next) => {
  server.get('/hello', (request, reply) => {
    return whatsappController.greet(request, reply);
  });
  server.get('/startSession', (request, reply) => {
    return whatsappController.startSession(request, reply);
  });
  server.get('/sendMsg', (request, reply) => {
    return whatsappController.sendMessage(request, reply);
  });
  next();
};
