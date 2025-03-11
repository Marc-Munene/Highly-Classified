import { Schema, model } from "mongoose";

const userUnitsSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  unit: { type: Schema.Types.ObjectId, ref: "unit" },
});

const UserUnit = new model("userUnit", userUnitsSchema);

export { UserUnit };
