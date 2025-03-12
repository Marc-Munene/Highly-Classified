import { Schema, model } from "mongoose";

const buildingSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    contactInfo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Building = new model("building", buildingSchema);

export { Building };
