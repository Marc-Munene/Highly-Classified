import { Schema, model } from "mongoose";

const unitSchema = new Schema({
  name: { type: String, required: true },
  unitCode: { type: String, required: true },
});

const Unit = new model("unit", unitSchema);

export { Unit }; 
