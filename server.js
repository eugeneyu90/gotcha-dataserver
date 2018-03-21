const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Use the environment variable or use a given port
const PORT = process.env.PORT || 8080;

// Create a server, uses `handleRequest` which is function that takes
// care of providing requested data
// const server = http.createServer(handleRequest);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello there')
})

app.post('/imageblob', (req, res) => {
  const data = req.body
  console.log(data)
  res.json(data)
})

// Start the server
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:%s', PORT);
});