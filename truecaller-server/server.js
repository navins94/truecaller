const config = require('./config');
const app = require('./app');
const { once } = require('events');

let server;

async function start() {
  if (server) await stop(); //Calling start if already started, restarts...
  server = app.listen(config.port);
  server.on('error', console.error.bind(console));
  await once(server, 'listening');
  console.log(
    `🛹 Listening on http://${server.address().address}:${
      server.address().port
    }`
  );
  return server;
}

async function stop() {
  console.log('Shutting down...');
  if (server) await server.close(); //Stop accepting new connections
  server = null;
  if (process.env.NODE_ENV != 'test') {
    await mongoose.disconnect();
  }
}

module.exports = {
  start,
  stop,
};
