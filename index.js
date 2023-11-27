require("dotenv").config();
const app = require("./app");

//---------> listen to server
const PORT = process.env || 5000;
const start = () => {
  try {
    app.listen(PORT, console.log(`Server is listening at PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
