import { UserUnit } from "../database/models/userUnits.js";

//Post user units
export const postUserUnits = async (req, res) => {
  try {
    const { user, unit } = req.body;

    if (!user || !unit) {
      return res.status(400).json({
        success: false,
        message: "User and Unit are required",
      });
    }

    const userUnitData = { user, unit };
    const newUserUnit = await UserUnit.create(userUnitData);
    res.status(201).json({
      success: true,
      data: newUserUnit,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to add user unit",
    });
  }
};

//Get all user units
export const getUserUnits = async (req, res) => {
  try {
    const userUnits = await UserUnit.find().populate("user unit");

    if (!userUnits) {
      return res.status(404).json({
        success: false,
        message: "No user units found",
      });
    }

    res.status(200).json({
      success: true,
      data: userUnits,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get user units",
    });
  }
};
