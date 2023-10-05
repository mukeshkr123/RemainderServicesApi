const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("../src/config/serverConfig");
// const { sendEmail } = require("./services/email-service");
const TicketController = require("./controllers/ticket-controller");

const jobs = require("./utils/job.js");

const setupAndServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    jobs();
  });

  // sendEmail(
  //   "mukeshmehta2041@gmail.com",
  //   "errer.com",
  //   "Hi my name is mukesh kumar"
  // );
};

setupAndServer();
