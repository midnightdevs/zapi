import WhatsappController from '@Domains/whatsapp/classes/controller';

export default (server, options, next) => {
  server.get('/hello', (request, reply) => {
    return WhatsappController.greet(request, reply);
  });
  server.get('/startSession', (request, reply) => {
    return WhatsappController.startSession(request, reply);
  });
  server.get('/sendMsg', (request, reply) => {
    return WhatsappController.sendMessage(request, reply);
  });
  next();
};
