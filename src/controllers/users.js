import { User } from "../database/models/user";

export const getUsers = async (req, res) => {
  try {
    const users = User.find();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "User not found!",
    });
  }
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

export const deleteUsers = (req, res) => {
  res.json({
    message: "deleting users",
  });
};
