import WhatsappController from '@Domains/whatsapp/classes/controller';

export default (server, options, next) => {
  server.get('/hello', (request, reply) => {
    return WhatsappController.greet(request, reply);
  });
  next();
};
