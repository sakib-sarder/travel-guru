const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.send("Dragon is Upcomming");
});
  

app.listen(port, () => {
    console.log(`Daragon api is running on port: ${port}`);
  });