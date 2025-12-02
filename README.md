# FirstApp

A lightweight, dependency-free Node.js HTTP server with basic uptime and greeting endpoints. Perfect for quick demos or a starter API without external packages.

## Features
- `/` root welcome message with quick instructions
- `/health` uptime check with current timestamp
- `/greet?name=YourName` friendly greeting with optional name query parameter

## Getting Started
1. Ensure you have Node.js 18+ installed.
2. Start the server:
   ```bash
   npm start
   ```
3. Visit the endpoints:
   - [http://localhost:3000/](http://localhost:3000/)
   - [http://localhost:3000/health](http://localhost:3000/health)
   - [http://localhost:3000/greet?name=Divyesh](http://localhost:3000/greet?name=Divyesh)

Set a custom port with the `PORT` environment variable:
```bash
PORT=4000 npm start
```

## Project Structure
```
firstapp/
├── src/
│   └── server.js    # HTTP server and routes
├── .gitignore       # Common Node ignores
├── package.json     # Scripts and metadata
└── README.md
```

## License
ISC
