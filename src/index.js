const fs = require('fs');
const https = require('https');

const options = {
  ca: fs.readFileSync('certificates/server-ca.crt'),
  cert: fs.readFileSync('certificates/localhost.crt'),
  key: fs.readFileSync('certificates/localhost.key'),
  requestCert: true
};

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end(`Hello, ${req.client.getPeerCertificate().subject.CN}!`);
};

https
  .createServer(options, requestListener)
  .listen(9443);