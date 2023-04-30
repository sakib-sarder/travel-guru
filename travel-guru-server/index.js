const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
const places = require('./Data/Place.json')

app.get("/", (req, res) => {
    res.send("Dragon is Upcomming");
});

app.get("/place", (req, res) => {
    res.send(places)
})

app.get("/place/:id", (req, res) => {
    const id = req.params.id;
    const identificationPlace = places.find((p) => p.id == id);
    res.send(identificationPlace)
})
  

app.listen(port, () => {
    console.log(`Daragon api is running on port: ${port}`);
  });