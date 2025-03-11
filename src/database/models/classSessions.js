import { Schema, model } from "mongoose";

const classSessionsSchema = new Schema({
  class: { type: Schema.Types.ObjectId, ref: "class" },
  session: { type: Schema.Types.ObjectId, ref: "session" },
});

const ClassSession = new model("classSession", classSessionsSchema);

export { ClassSession };
