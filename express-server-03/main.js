const express = require('express')
const app = express()

// enable middleware para acceder a los datos que recibimos de form
app.use(express.urlencoded({ extended: false }))

// routes para get requests
app.get('/', (request, response) => {
  response.send(`
    <style>
    body {background-color: powderblue; }
    input {padding:0.5rem ; width:400px;}
   
    </style>
    <h1>What Color is the sky on a clean day? </h1>

    <form action="/result" method="POST">
    <input type="text" name="color" placeholder="Enter a Color">
    <button>Submit Answer </button>
    </form>
    `)
})

app.get('/about', (request, response) => {
  response.send('Welcome to The About Page')
})

// post routes
app.post('/result', (request, response) => {
  if (request.body.color.trim().toLowerCase() === 'blue') {
    response.send(`
    <style>
    body {background-color: pink; }
    </style>
    <h1>Yes, the Sky is Blue 👽</h1>
    `)
  } else {
    response.send(`
        <style>
        body {background-color: tomato; }
        </style>
        <h1>Not True BRO 💀, try again</h1>
        `)
  }
})

console.log('The Server is Running in Port 3000')

app.listen(3000)
