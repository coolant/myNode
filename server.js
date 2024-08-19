const express = require("express") //import to express
const app = express()
const connectDB = require("./config/db")

connectDB()

app.get("/superheroes", (req, res) => {
  res.send({ msg: "Showing all heroes" })
})

app.get("/superheroes/:superheroId", (req, res) => {
  res.send({ msg: "Showing hero with id " + req.params.superheroId })
})

app.get("/", (req, res) => {
  res.send({ msg: "Api server is running" }) //send hello world to website
})

app.post("/superheroes", (req, res) => {
  res.send({ msg: "Creating a hero" })
})

app.put("/superheroes/:superheroId", (req, res) => {
  res.send({ msg: "Editing superhero " + req.params.superheroId })
})

app.delete("/superheroes/:superheroId", (req, res) => {
  res.send({ msg: "Deleting superhero " + req.params.superheroId })
})

app.listen(3000, console.log("Server started on port 3000")) //listen 3000 port
