import { UserCourse } from "../database/models/userCourses.js";

//add
export const postUserCourses = async (req, res) => {
  try {
    const { user, course } = req.body;

    if (!user || !course) {
      return res.status(400).json({
        success: false,
        message: "User and Course are required",
      });
    }

    const userCourseData = { user, course };
    const newUserCourse = await UserCourse.create(userCourseData);
    res.status(201).json({
      success: true,
      data: newUserCourse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to add user course",
    });
  }
};

//get all user courses

export const getUserCourses = async (req, res) => {
  try {
    const userCourses = await UserCourse.find().populate("user course");

    if (!userCourses) {
      return res.status(404).json({
        success: false,
        message: "No user courses found",
      });
    }

    res.status(200).json({
      success: true,
      data: userCourses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get user courses",
    });
  }
};
