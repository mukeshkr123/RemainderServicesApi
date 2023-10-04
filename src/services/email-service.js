const { transporter, emailConfig } = require("../config/emailConfig");

// Function to send an email
async function sendEmail(mailTo, mailSubject, mailBody) {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: mailTo,
    subject: mailSubject,
    text: mailBody,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: " + error);
  }
}

module.exports = { sendEmail };
