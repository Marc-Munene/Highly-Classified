import { Schema, model } from "mongoose";

const unitSessionSchema = new Schema({
  unit: { type: Schema.Types.ObjectId, ref: "unit" },
  session: { type: Schema.Types.ObjectId, ref: "session" },
});

const UnitSession = new model("unitSession", unitSessionSchema);

export { UnitSession };
