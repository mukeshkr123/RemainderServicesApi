const TicketService = require("../services/email-service");

const create = async (req, res, next) => {
  try {
    const response = await TicketService.createNotification(req.body);
    return res.status(201).json({
      success: true,
      data: response,
      err: {},
      message: "Successfully registered an email remainder",
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      data: {},
      err: error,
      message: "Unabele to create an email remainder",
    });
  }
};

module.exports = { create };
