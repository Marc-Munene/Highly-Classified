export const getUsers = (req, res) => {
  res.json({
    message: "getting users",
  });
};

export const addUsers = (req, res) => {
  res.json({
    message: "adding users",
  });
};

export const editUsers = (req, res) => {
  res.json({
    message: "editing users",
  });
};

export const removeUsers = (req, res) => {
  res.json({
    message: "deleting users",
  });
};
