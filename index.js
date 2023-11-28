require("dotenv").config();
const app = require("./app");

//---------> listen to server
const PORT = process.env.PORT || 5000; //todo change this to 5000
const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening at PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
