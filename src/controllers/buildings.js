import { Building } from "../database/models/building.js";

export const getBuildings = (req, res) => {
  res.json({
    message: "getting buildings",
  });
};
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
export const editBuildings = (req, res) => {
  res.json({
    message: "edit buildings",
  });
};
export const deleteBuildings = (req, res) => {
  res.json({
    message: "delete buildings",
  });
};
