const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require("./data/categories.json");
const categoryTopics = require("./data/languages_details.json");

app.get("/", (req, res) => {
  res.send("programming server is running");
});

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

app.listen(port, () => {
  console.log("programming learning server is running");
});
