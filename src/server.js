import express from "express";
import { getHome } from "./controllers/home.js";
import {
  addUsers,
  editUsers,
  getUsers,
  removeUsers,
} from "./controllers/users.js";
import {
  addCourses,
  deleteCourses,
  editCourses,
  getCourses,
} from "./controllers/courses.js";

const app = express();

const PORT = process.env.PORT;

//home route
app.get("/", getHome);

//users
app.get("/users", getUsers);

app.post("/users", addUsers);

app.put("/users", editUsers);

app.delete("/users", removeUsers);

//courses
app.get("/courses", getCourses);

app.post("/courses", (req, res) => {
  res.json({
    message: "adding courses",
  });
});

app.put("/courses", (req, res) => {
  res.json({
    message: "editing coursers",
  });
});

app.delete("/courses", (req, res) => {
  res.json({
    message: "deleting courses",
  });
});

//units
app.get("/units", (req, res) => {
  res.json({
    message: "getting units",
  });
});

app.post("/units", addCourses);

app.put("/units", editCourses);

app.delete("/units", deleteCourses);

//sessions

app.get("/sessions", (req, res) => {
  res.json({
    message: "getting sessions",
  });
});

app.post("/sessions", (req, res) => {
  res.json({
    message: "adding sessions",
  });
});

app.put("/sessions", (req, res) => {
  res.json({
    message: "editing sessions",
  });
});

app.delete("/sessions", (req, res) => {
  res.json({
    message: "deleting sessions",
  });
});

//buildings
app.get("/buildings", (req, res) => {
  res.json({
    message: "getting buildings",
  });
});

app.post("/buildings", (req, res) => {
  res.json({
    message: "adding buildings",
  });
});

app.put("/buildings", (req, res) => {
  res.json({
    message: "editing buildings",
  });
});

app.delete("/buildings", (req, res) => {
  res.json({
    message: "deleting buildings",
  });
});

//classes
app.get("/classes", (req, res) => {
  res.json({
    message: "getting classes",
  });
});

app.post("/classes", (req, res) => {
  res.json({
    message: "adding classes",
  });
});

app.put("/classes", (req, res) => {
  res.json({
    message: "editing classes",
  });
});

app.delete("/classes", (req, res) => {
  res.json({
    message: "deleting classes",
  });
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
