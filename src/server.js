const http = require('http');
const { URL } = require('url');

const PORT = process.env.PORT || 3000;

/**
 * Utility helper to send JSON responses with proper headers.
 * @param {http.ServerResponse} res
 * @param {number} statusCode
 * @param {object} payload
 */
function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload, null, 2);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body)
  });
  res.end(body);
}

/**
 * Creates a simple, dependency-free HTTP server with a handful of routes
 * for basic uptime and greeting interactions.
 */
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  // Basic routing without any external dependencies.
  if (req.method === 'GET' && pathname === '/') {
    sendJson(res, 200, {
      message: 'Welcome to FirstApp! Add `health` or `greet?name=YourName` to the path to explore.'
    });
    return;
  }

  if (req.method === 'GET' && pathname === '/health') {
    sendJson(res, 200, {
      status: 'ok',
      uptimeSeconds: process.uptime(),
      timestamp: new Date().toISOString()
    });
    return;
  }

  if (req.method === 'GET' && pathname === '/greet') {
    const name = url.searchParams.get('name') || 'there';
    sendJson(res, 200, {
      greeting: `Hello, ${name}!`,
      tip: 'Pass a name query parameter to personalize this response.'
    });
    return;
  }

  sendJson(res, 404, {
    error: 'Not Found',
    path: pathname
  });
});

server.listen(PORT, () => {
  console.log(`FirstApp server running on http://localhost:${PORT}`);
});
