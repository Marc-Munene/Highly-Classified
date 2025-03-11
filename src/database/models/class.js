import { Schema, model } from "mongoose";

const classSchema = new Schema({
  name: { type: String, required: true },
  capacity: { type: String, required: true },
  building: { type: Schema.Types.ObjectId, ref: "building" },
});

const Class = new model("class", classSchema);

export { Class };
