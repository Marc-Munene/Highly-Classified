import { Router } from "express";
import {
  addUnits,
  deleteUnits,
  editUnits,
  getUnits,
} from "../controllers/units.js";

const unitRouter = Router();

unitRouter
  .route("/units")
  .get(getUnits)
  .post(addUnits)
  .put(editUnits)
  .delete(deleteUnits);

export { unitRouter };
