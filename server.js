const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
const path = require("path");
const db = require("./models");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
const MONGODB_URI = "mongodb+srv://753seb:<password>@cluster0.z4sfz.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", {
  useNewUrlParser: true,
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/exercise.html"));
});
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "public/stats.html"));
});

app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((workouts) => res.json(workouts))
    .catch((err) => res.json(err));
});

app.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then((newWorkout) => res.json(newWorkout))
    .catch((err) => res.json(err));
});

app.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: body } },
    { new: true }
  )
    .then((exercises) => res.json(exercises))
    .catch((err) => res.json(err));
});

app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((exercises) => res.json(exercises))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
