const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("../src/config/serverConfig");
const EmailService = require("./services/email-service");
const TicketController = require("./controllers/ticket-controller");

const jobs = require("./utils/job.js");
const { subscribeMessage, createChannel } = require("./utils/messageQueue");
const { REMINDER_BINDING_KEY } = require("./config/serverConfig");

const setupAndServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);

  const channel = await createChannel();
  subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    jobs();
  });
};

setupAndServer();
