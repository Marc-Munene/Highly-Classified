import { Schema, model } from "mongoose";

const userCoursesSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" },
  course: { type: Schema.Types.ObjectId, ref: "course" },
});

const UserCourse = new model("userCourse", userCoursesSchema);

export { UserCourse }; 
