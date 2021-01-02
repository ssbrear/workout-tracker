const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  type: { type: String, trim: true },
  name: { type: String, trim: true },
  weight: { type: Number },
  sets: { type: Number },
  reps: { type: Number },
  duration: { type: Number },
  isCardio: { type: Boolean },
  distance: { type: Number },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
