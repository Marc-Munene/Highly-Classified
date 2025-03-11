import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  regNo: { type: String, unique: true },
  course: { type: String },
  role: {
    type: String,
    enum: ["student", "lecturer", "classrep", "user"],
    default: "user",
  },
});

const User = new model("user", userSchema);

export { User };
