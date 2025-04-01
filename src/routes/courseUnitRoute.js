import { Router } from "express";
import { getCourseUnits, postCourseUnits } from "../controllers/courseUnit.js";

const courseUnitRouter = Router();

courseUnitRouter
  .route("/courseUnits")
  .get(getCourseUnits)
  //   .get(getSingleCourse)
  .post(postCourseUnits);

export { courseUnitRouter };
