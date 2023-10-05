const cron = require("node-cron");
const emailService = require("../services/email-service");
const { transporter } = require("../config/emailConfig");

const setupJobs = () => {
  cron.schedule("*/2 * * * *", async () => {
    const response = await emailService.fetchPendingEmail();
    console.log(response);
    response.forEach((email) =>
      transporter.sendMail(
        {
          to: email.recepientEmail,
          subject: email.subject,
          text: email.content,
        },
        async (err, data) => {
          if (err) {
            console.log("ERROR", err);
          } else {
            console.log("Data", data);
            await emailService.updateTicket(email.id, { status: "SUCCESS" });
          }
        }
      )
    );
  });
};

module.exports = setupJobs;
