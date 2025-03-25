import { Unit } from "../database/models/unit.js";

export const getUnits = async (req, res) => {
  try {
    const units = await Unit.find();

    res.status(200).json({
      success: true,
      data: units,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Unit not found!",
    });
  }
};

export const addUnits = async (req, res) => {
  const { name, unitCode } = req.body;

  try {
    if (!name || !unitCode) {
      return res.status(400).json({
        message: "All fields are required!",
      });
    }

    const existingUnitCode = await Unit.findOne({ unitCode });

    if (existingUnitCode) {
      return res.status(409).json({
        success: false,
        message: "Unitcode already exists!",
      });
    }

    const unitDetails = { name, unitCode };
    const newUnit = await Unit.create(unitDetails);

    res.status(201).json({
      success: true,
      message: "Unit added successfully!",
      data: newUnit,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucess: false,
      message: "Cannot add unit",
    });
  }
};

export const editUnits = async (req, res) => {
  try {
    const unitId = req.query.id;

    const unitName = await Unit.findOneAndUpdate({ _id: unitId }, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data: unitName,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot edit unit!",
    });
  }
};

export const deleteUnits = async (req, res) => {
  try {
    const unitId = req.query.id;

    const deletedUnit = await Unit.deleteOne({ _id: unitId });

    res.status(200).json({
      success: true,
      deletedCount: deletedUnit.deletedCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed!",
    });
  }
};
