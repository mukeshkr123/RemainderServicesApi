const { transporter, emailConfig } = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const repo = new TicketRepository();

// Function to send an email
async function sendBasicEmail(mailTo, mailSubject, mailBody) {
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

const fetchPendingEmail = async (timesStamp) => {
  try {
    const response = await repo.get({ status: "PENDING" });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateTicket = async (ticketId, status) => {
  try {
    const response = await repo.update(ticketId, status);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createNotification = async (data) => {
  try {
    const response = await repo.create(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const subscribeEvents = async (payload) => {
  let service = payload.service;
  let data = payload.data;
  switch (service) {
    case "CREATE_TICKET":
      await createNotification(data);
      break;
    case "SEND_BASIC_MAIL":
      await sendBasicEmail(data);
      break;
    default:
      console.log("No valid event received");
      break;
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmail,
  createNotification,
  updateTicket,
  subscribeEvents,
};
