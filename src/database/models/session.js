import { Schema, model } from "mongoose";

const sessionSchema = new Schema({
  unit: { type: String, required: true },
  course: { type: String, required: true },
  lecturer: { type: String, required: true },
});

const Session = new model("session", sessionSchema);

export { Session };
