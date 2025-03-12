import { Schema, model } from "mongoose";

const userUnitsSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    unit: { type: Schema.Types.ObjectId, ref: "unit" },
  },
  {
    timestamps: true,
  }
);

const UserUnit = new model("userUnit", userUnitsSchema);

export { UserUnit };
