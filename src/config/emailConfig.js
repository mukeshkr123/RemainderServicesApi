const nodemailer = require("nodemailer");
const { EMAIL_ID, EMAIL_PASSWORD } = require("./serverConfig");

// Your email configuration
const emailConfig = {
  service: "Gmail", // Change this to your email service (e.g., "Outlook", "Yahoo", etc.)
  auth: {
    user: EMAIL_ID, // Your email address
    pass: EMAIL_PASSWORD, // Your email password or an app-specific password
  },
};

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport(emailConfig);

module.exports = { transporter, emailConfig };
