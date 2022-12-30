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
const blogs = require("./data/blogs.json");

app.get("/", (req, res) => {
  res.send("programming server is running");
});

//api for exercise
app.get("/exercise-categories", (req, res) => {
  res.send(exercise_categories);
});

app.get("/exercise-category/:id", (req, res) => {
  const id = req.params.id;
  const exercise = exercises.find((e) => e.exercise_id === id);
  res.send(exercise);
});

//API is for tutorial
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

// API for courses
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c.course_id === id);
  res.send(course);
});

// api for blogs

app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.get("/blog/:id", (req, res) => {
  const id = req.params.id;
  const blog = blogs.filter((b) => b.blog_id === id);
  res.send(blog);
});
app.listen(port, () => {
  console.log("programming learning server is running");
});
