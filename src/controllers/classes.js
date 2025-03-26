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

    // Normalize the name by removing all whitespace and converting to lowercase
    const normalizedNewName = name.replace(/\s+/g, "").toLowerCase();

    // Check if a class with similar normalized name already exists
    const existingClass = await Class.findOne({
      $expr: {
        $eq: [
          {
            $toLower: {
              $replaceAll: { input: "$name", find: " ", replacement: "" },
            },
          },
          normalizedNewName,
        ],
      },
    });

    if (existingClass) {
      return res.status(409).json({
        success: false,
        message: "Class name already exists",
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
      message: "Failed!",
    });
  }
};

//Edit class
export const editClasses = async (req, res) => {
  try {
    const classId = req.query.id;

    const editedClass = await Class.findOneAndUpdate(
      { _id: classId },
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: editedClass,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Faled to edit!",
    });
  }
};

//Delete Class
export const deleteClasses = async (req, res) => {
  try {
    const classId = req.query.id;

    const deletedClass = await Class.deleteOne({ _id: classId });

    res.status(200).json({
      success: true,
      deletedCount: deletedClass.deletedCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete!",
    });
  }
};
