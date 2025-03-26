import { Building } from "../database/models/building.js";
import { Class } from "../database/models/class.js";

//Get classes
export const getClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate("building");

    res.status(200).json({
      success: true,
      data: classes,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Faled to get classes!",
    });
  }
};

//Add classes
export const addClasses = async (req, res) => {
  try {
    const { building, name, capacity, status } = req.body;

    if (!name || !capacity) {
      return res.status(409).json({
        message: "Name and Capacity are required",
      });
    }
    const classData = { name, capacity, status };

    const newClass = await Class.create(classData);

    const existingBuilding = await Building.findById(building);

    newClass.building = existingBuilding._id;

    await newClass.save();

    res.status(200).json({
      success: true,
      data: newClass,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Faled!",
    });
  }
};

export const editClasses = (req, res) => {
  res.json({
    message: "editing classes",
  });
};

export const deleteClasses = (req, res) => {
  res.json({
    message: "deleting classes",
  });
};
