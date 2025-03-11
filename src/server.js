import express from "express";
import { getHome } from "./controllers/home.js";
import {
  addUsers,
  deleteUsers,
  editUsers,
  getUsers,
} from "./controllers/users.js";
import {
  addCourses,
  deleteCourses,
  editCourses,
  getCourses,
} from "./controllers/courses.js";
import {
  addUnits,
  deleteUnits,
  editUnits,
  getUnits,
} from "./controllers/units.js";

const app = express();

const PORT = process.env.PORT;

//home route
app.get("/", getHome);

//users
app.get("/users", getUsers);

app.post("/users", addUsers);

app.put("/users", editUsers);

app.delete("/users", deleteUsers);

//courses
app.get("/courses", getCourses);

app.post("/courses", addCourses);

app.put("/courses", editCourses);

app.delete("/courses", deleteCourses);

//units
app.get("/units", getUnits);

app.post("/units", addUnits);

app.put("/units", editUnits);

app.delete("/units", deleteUnits);

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
