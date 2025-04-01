import { Router } from "express";
import { getUserCourses, postUserCourses } from "../controllers/userCourse.js";

const userCourseRouter = Router();

userCourseRouter
  .route("/userCourses")
  .get(getUserCourses)
  .put()
  .post(postUserCourses)
  .delete();

export { userCourseRouter };
