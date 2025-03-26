import { User } from "../database/models/user.js";
import validator from "validator";

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
    res.status(404).json({
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
    if (!name || !email || !regNo) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    if (!email.endsWith(".students@gmail.com")) {
      return res.status(400).json({
        message: "Email must be a Gmail address (.students@gmail.com)",
      });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { regNo }] });

    if (existingUser) {
      if (existingUser.email === email && existingUser.regNo) {
        return res.status(409).json({
          success: false,
          message: "Email and regNo already exist!",
        });
      } else if (existingUser.email === email) {
        return res.status(409).json({
          success: false,
          message: "Email already exist",
        });
      } else {
        return res.status(409).json({
          success: false,
          message: "Registration alredy exists!",
        });
      }
    }

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
      message: "Cannot add user",
    });
  }
};

//Edit users
export const editUsers = async (req, res) => {
  try {
    const userId = req.query.id;
    const { email } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    if (!email.endsWith(".students@gmail.com")) {
      return res.status(400).json({
        success: false,
        message: "Email must be a Gmail address (.students@gmail.com)",
      });
    }

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

//Delete users
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
