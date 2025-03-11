import { Schema, model } from "mongoose";

const courseUnitsSchema = new Schema({
  course: { type: Schema.Types.ObjectId, ref: "course" },
  unit: { type: Schema.Types.ObjectId, ref: "unit" },
});

const CourseUnit = new model("courseUnit", courseUnitsSchema);

export { CourseUnit };
