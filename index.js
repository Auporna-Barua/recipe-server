const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Healthy food is running");
});
// main code Start
app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/recipes", (req, res) => {
  res.send(recipes);
});



// main code End
app.listen(port, () => {
  console.log(`Healthy food server is running from ${port}`);
});
