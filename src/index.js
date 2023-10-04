const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("../src/config/serverConfig");
const { sendEmail } = require("./services/email-service");

const setupAndServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

  // sendEmail(
  //   "mukeshmehta2041@gmail.com",
  //   "errer.com",
  //   "Hi my name is mukesh kumar"
  // );
};

setupAndServer();
