const express = require ('express')
const app = express()

// routes
app.get('/', (request, response) => {
    response.send("Welcome to our Homepage")
})

app.get('/about', (request, response) => {
    response.send("Welcome to The About Page")
})

console.log("The Server is Running in Port 3000");
app.listen(3000)