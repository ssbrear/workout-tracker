const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((workouts) => res.json(workouts))
    .catch((err) => res.json(err));
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then((newWorkout) => res.json(newWorkout))
    .catch((err) => res.json(err));
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: body } },
    { new: true }
  )
    .then((exercises) => res.json(exercises))
    .catch((err) => res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .limit(5)
    .then((dbExercise) => {
      res.json(dbExercise);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
