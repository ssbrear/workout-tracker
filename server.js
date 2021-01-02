const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(require("./routes/html"));
app.use(require("./routes/api"));

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
