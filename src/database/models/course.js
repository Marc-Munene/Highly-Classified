import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  name: { type: String, required: true },
  school: { type: String, required: true },
});

const Course = new model("course", courseSchema);

export { Course };
