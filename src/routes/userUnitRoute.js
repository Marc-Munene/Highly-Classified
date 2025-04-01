import { Router } from "express";
import { getUserUnits, postUserUnits } from "../controllers/userUnits.js";

const userUnitRouter = Router();

userUnitRouter
  .route("/userUnits")
  .get(getUserUnits)
  .post(postUserUnits)
  .put()
  .delete();

export { userUnitRouter };
