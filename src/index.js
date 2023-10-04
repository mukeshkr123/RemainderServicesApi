const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("../src/config/serverConfig");

const setupAndServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
};

setupAndServer();
