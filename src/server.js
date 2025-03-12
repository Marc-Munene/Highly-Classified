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
import {
  addClasses,
  deleteClasses,
  editClasses,
  getClasses,
} from "./controllers/classes.js";
import { connectDB } from "./database/config.js";
import { userRouter } from "./routes/userRoute.js";

const app = express();

connectDB();

const PORT = process.env.PORT;

//home route
app.get("/", getHome);

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
app.get("/classes", getClasses);

app.post("/classes", addClasses);

app.put("/classes", editClasses);

app.delete("/classes", deleteClasses);

//routing
app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
