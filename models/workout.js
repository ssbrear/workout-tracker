const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "What kind of workout is this?",
        },
        name: {
          type: String,
          trim: true,
          required: "What is this workout called?",
        },
        weight: { type: Number },
        sets: { type: Number },
        reps: { type: Number },
        duration: { type: Number, required: "How long was this workout?" },
        distance: { type: Number },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
