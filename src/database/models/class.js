import { Schema, model } from "mongoose";

const classSchema = new Schema(
  {
    building: { type: Schema.Types.ObjectId, ref: "building" },
    name: { type: String, required: true },
    capacity: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Class = new model("class", classSchema);

export { Class };
