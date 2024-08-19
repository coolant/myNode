const express = require("express") //import to express
const app = express()

app.get("/", (req, res) => {
  res.send("Hello world") //send hello world to website
})

app.listen(3000, console.log("Server started on port 3000")) //listen 3000 port
