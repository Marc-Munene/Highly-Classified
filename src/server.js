import express from "express";

import { getHome } from "./controllers/home.js";

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
import { unitRouter } from "./routes/unitRouter.js";
import { classRouter } from "./routes/classRouter.js";

const app = express();

//middleware
app.use(express.json());

//connect to database
connectDB();

//port
const PORT = process.env.PORT;

//home route
app.get("/", getHome);

//classes
app.get("/classes", getClasses);

app.post("/classes", addClasses);

app.put("/classes", editClasses);

app.delete("/classes", deleteClasses);

//routing
app.use(
  "/api",
  userRouter,
  buildingRouter,
  courseRouter,
  unitRouter,
  classRouter
);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
