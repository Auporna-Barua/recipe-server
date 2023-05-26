const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("food city is running");
});
// main code Start





// main code End
app.listen(port, () => {
  console.log(`food city server is running from ${port}`);
});
