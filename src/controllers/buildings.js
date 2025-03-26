import { Building } from "../database/models/building.js";

export const getBuildings = async (req, res) => {
  try {
    const buildings = await Building.find();

    if (!buildings) {
      return res.status(409).json({
        message: "No buldings in database",
      });
    }

    res.status(200).json({
      success: true,
      data: buildings,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed!",
    });
  }
};

//Add buildings
export const addBuildings = async (req, res) => {
  try {
    const { name, location, contactInfo } = req.body;

    if (!name || !location || !contactInfo) {
      return res.status(409).json({
        message: "All fields are required",
      });
    }

    const buildingData = { name, location, contactInfo };

    const newBuilding = await Building.create(buildingData);

    res.status(200).json({
      success: true,
      data: newBuilding,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed!",
    });
  }
};

//Edit buildings
export const editBuildings = async (req, res) => {
  try {
    const buildingId = req.query.id;

    const building = await Building.findOneAndUpdate(
      { _id: buildingId },
      req.body,
      { new: true }
    );

    res.status(200).json({
      succes: true,
      data: building,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: "Failed to edit!",
    });
  }
};

//Delete buildings
export const deleteBuildings = async (req, res) => {
  try {
    const buildingId = req.query.id;

    const deletedBuilding = await Building.deleteOne({ _id: buildingId });

    res.status(200).json({
      success: false,
      deletedCount: deletedBuilding.deletedCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucees: false,
      message: "Failed to delete!",
    });
  }
};
