import express from "express";
import { getHome } from "./controllers/home.js";

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
  addClasses,
  deleteClasses,
  editClasses,
  getClasses,
} from "./controllers/classes.js";

import { connectDB } from "./database/config.js";
import { userRouter } from "./routes/userRoute.js";
import { buildingRouter } from "./routes/buildingRoute.js";
import { courseRouter } from "./routes/courseRouter.js";

const app = express();

app.use(express.json());

connectDB();

const PORT = process.env.PORT;

//home route
app.get("/", getHome);

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

//classes
app.get("/classes", getClasses);

app.post("/classes", addClasses);

app.put("/classes", editClasses);

app.delete("/classes", deleteClasses);

//routing
app.use("/api", userRouter, buildingRouter, courseRouter);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
