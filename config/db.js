const mongoose = require("mongoose")

const DB_URI =
  "mongodb+srv://admin:P4ssword@cluster0.er24k.mongodb.net/mynodejsdb?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI)
    console.log("Database connected")
  } catch (error) {
    console.log("Error with connecting : " + error.message)
  }
}

module.exports = connectDB //run connectDB
