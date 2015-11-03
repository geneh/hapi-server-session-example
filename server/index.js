var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.register({
  register: require('hapi-server-session'),
  options: {
    cookie: {
      isSecure: false,
    },
  },
}, function (err) { if (err) { throw err; } });

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    request.session.views = request.session.views + 1 || 1;
    console.log(request.session);
    reply('Views: ' + request.session.views);
  }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
