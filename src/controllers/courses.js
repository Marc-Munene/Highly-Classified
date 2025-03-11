export const getCourses = (req, res) => {
  res.json({
    message: "Getting courses",
  });
};

export const addCourses = (req, res) => {
  res.json({
    message: "adding courses",
  });
};

export const editCourses = (req, res) => {
  res.json({
    message: "editing courses",
  });
};

export const deleteCourses = (req, res) => {
  res.json({
    message: "deleting course",
  });
};
