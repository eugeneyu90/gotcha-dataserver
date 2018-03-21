const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// import * as firebase from 'firebase'
// // import FirebaseStorage from 'firebase'

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyBWlhoHRN3YtIamdrrdntfd03Y5TZHQTWs",
//   authDomain: "gotchaapp-2018.firebaseapp.com",
//   databaseURL: "https://gotchaapp-2018.firebaseio.com",
//   storageBucket: "gotchaapp-2018.appspot.com"
// };

// if (firebase.apps.length === 0) {
//   firebase.initializeApp(firebaseConfig);
// }


// Use the environment variable or use a given port
const PORT = process.env.PORT || 8080;

// Create a server, uses `handleRequest` which is function that takes
// care of providing requested data
// const server = http.createServer(handleRequest);

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   next();
// });

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello there')
})

app.post('/imageblob', (req, res) => {

  res.json(req.body)
}) 

// Start the server
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:%s', PORT);
});