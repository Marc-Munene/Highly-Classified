import { Router } from "express";
import {
  addCourses,
  deleteCourses,
  editCourses,
  getCourses,
} from "../controllers/courses.js";

const courseRouter = Router();

courseRouter
  .route("/courses")
  .get(getCourses)
  .post(addCourses)
  .put(editCourses)
  .delete(deleteCourses);

export { courseRouter };
