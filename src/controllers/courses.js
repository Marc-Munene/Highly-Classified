import { Course } from "../database/models/course.js";

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    if (courses.length === 0) {
      return res.status(404).json({
        message: "Courses not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: courses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get Courses",
    });
  }
};

// export const addCourses = async (req, res) => {
//   try {
//     const { name, school } = req.body;

//     if (!name || !school) {
//       return res.status(400).json({
//         message: "Name and School fields are required",
//       });
//     }

//     const courseData = { name, school };
//     const newCourse = await Course.create(courseData);

//     res.status(200).json({
//       success: true,
//       data: newCourse,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to add1",
//     });
//   }
// };

export const addCourses = async (req, res) => {
  try {
    const { name, school } = req.body;

    // Trim whitespace and validate inputs
    const trimmedName = name?.trim();
    const trimmedSchool = school?.trim();

    if (!trimmedName || !trimmedSchool) {
      return res.status(400).json({
        success: false,
        message: "Name and School fields are required",
      });
    }

    // Normalize for comparison (case-insensitive, ignore special characters)
    const normalizedName = trimmedName.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Check for existing similar courses
    const existingCourses = await Course.find({ school: trimmedSchool });
    const duplicate = existingCourses.some((course) => {
      const existingNameNormalized = course.name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
      return existingNameNormalized === normalizedName;
    });

    if (duplicate) {
      return res.status(409).json({
        success: false,
        message: "A similar course already exists in this school",
      });
    }

    // Create new course if no duplicates
    const courseData = {
      name: trimmedName,
      school: trimmedSchool,
    };
    const newCourse = await Course.create(courseData);

    return res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: newCourse,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to add course due to server error",
    });
  }
};

export const editCourses = async (req, res) => {
  try {
    const courseId = req.query.id;

    const courseName = await Course.findOneAndUpdate(
      { _id: unitId },
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      data: courseName,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to edit courses",
    });
  }
};

export const deleteCourses = async (req, res) => {
  try {
    const courseId = req.query.id;

    const deletedCourse = await Course.deleteOne({ _id: courseId });

    res.status(200).json({
      succes: true,
      deletedCount: deletedCourse.deletedCount,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      succes: false,
      message: "Failed!",
    });
  }
};
