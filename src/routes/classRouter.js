import { Router } from "express";
import {
  addClasses,
  deleteClasses,
  editClasses,
  getClasses,
} from "../controllers/classes.js";

const classRouter = Router();

classRouter
  .route("/classes")
  .get(getClasses)
  .post(addClasses)
  .put(editClasses)
  .delete(deleteClasses);

export { classRouter };
