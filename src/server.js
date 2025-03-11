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
import {
  addSessions,
  deleteSessions,
  editSessions,
  getSessions,
} from "./controllers/sessions.js";
import {
  addBuildings,
  deleteBuildings,
  editBuildings,
  getBuildings,
} from "./controllers/buildings.js";

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

app.get("/sessions", getSessions);

app.post("/sessions", addSessions);

app.put("/sessions", editSessions);

app.delete("/sessions", deleteSessions);

//buildings
app.get("/buildings", getBuildings);

app.post("/buildings", addBuildings);

app.put("/buildings", editBuildings);

app.delete("/buildings", deleteBuildings);

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
