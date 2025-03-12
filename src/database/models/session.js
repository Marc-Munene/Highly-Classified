import { Schema, model } from "mongoose";

const sessionSchema = new Schema(
  {
    unit: { type: Schema.Types.ObjectId, ref: "unit" },
    class: { type: Schema.Types.ObjectId, ref: "class" },
  },
  {
    timestamps: true,
  }
);

const Session = new model("session", sessionSchema);

export { Session };
