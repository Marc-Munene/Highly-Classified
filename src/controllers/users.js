import { User } from "../database/models/user.js";

//Getting all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

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

//get one user
export const getOneUser = async (req, res) => {
  try {
    const oneUser = await User.find({
      name: { $regex: req.query.title, $options: "i" },
    });

    res.status(200).json({
      success: true,
      data: oneUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Cannot find user!",
    });
  }
};

//add users
export const addUsers = async (req, res) => {
  const { name, email, regNo, role } = req.body;
  try {
    const userData = { name, email, regNo, role };
    const newUser = await User.create(userData);

    res.status(200).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Faled!",
    });
  }
};

export const editUsers = async (req, res) => {
  try {
    const userId = req.query.userId;

    const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      succes: false,
      message: "Faled!",
    });
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const userId = req.query.id;

    const deletedUser = await User.deleteOne({ _id: userId });

    res.status(200).json({
      succes: true,
      deletedCount: deletedUser.deletedCount,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      succes: false,
      message: "Failed!",
    });
  }
};
