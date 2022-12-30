const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require("./data/categories.json");
const categoryTopics = require("./data/languages_details.json");
const exercise_categories = require("./data/exercise_categories.json");
const exercises = require("./data/exercises.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("programming server is running");
});

//below api is for exercise
app.get("/exercise-categories", (req, res) => {
  res.send(exercise_categories);
});

app.get("/exercise-category/:id", (req, res) => {
  const id = req.params.id;
  const exercise = exercises.filter((e) => e.exercise_id === id);
  res.send(exercise);
});

// below API is for tutorial
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const Topics = categoryTopics.filter(
    (category) => category.category_id === id
  );
  res.send(Topics);
});

app.get("/topic-details/:id", (req, res) => {
  const id = req.params.id;
  const topic = categoryTopics.find((t) => t._id === id);
  res.send(topic);
});

// below API is for courses
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.filter((c) => c.course_id === id);
  res.send(course);
});

app.listen(port, () => {
  console.log("programming learning server is running");
});
