const dotenv = require("dotenv");

dotenv.config({
  path: ".env.local",
});

module.exports = {
  PORT: process.env.PORT,
  EMAIL_ID: process.env.EMAIL_ID,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
};
