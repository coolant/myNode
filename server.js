const express = require("express") //import to express
const app = express()
const connectDB = require("./config/db")
const Hero = require("./models/heroModel")

connectDB()

//create middleware
app.use(express.json)

//Display all superheroes -> uses async
app.get("/superheroes", async (req, res) => {
  try {
    const heroes = await Hero.find({}) //async must be used with await
    res.json(heroes)
  } catch (error) {
    console.log(error)
  }
})

//Display superhero with ID
app.get("/superheroes/:superheroId", async (req, res) => {
  try {
    const hero = Hero.findById(req.params.superheroId)
    res.json(hero)
  } catch (error) {
    console.log(error)
  }
})

//Create new superhero
app.post("/superheroes", async (req, res) => {
  try {
    await Hero.create({
      superheroname: req.body.superheroname,
      name: req.body.name,
    })
    res.json({ msg: "superhero created" })
  } catch (error) {
    console.log(error)
  }
})

//Edit superhero with ID
app.put("/superheroes/:superheroId", async (req, res) => {
  try {
    await Hero.findByIdAndUpdate(req.params.superheroId, {
      superheroname: req.body.superheroname,
      name: req.body.name,
    })
    res.json({ msg: "superhero is updated" })
  } catch (error) {
    console.log(error)
  }
})

//Delete superhero
app.delete("/superheroes/:superheroId", async (req, res) => {
  try {
    await Hero.findByIdAndDelete(req.params.superheroId)
    res.json({ msg: "superhero is deleted" })
  } catch (error) {
    console.log(error)
  }
})

app.listen(3000, console.log("Server started on port 3000")) //listen 3000 port
