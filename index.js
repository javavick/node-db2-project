const express = require("express");
const server = express();
const db = require("./utils/db.js");

server.use(express.json());

// GET
server.get("/api/cars", async (req, res) => {
  try {
    res.json(await db("cars"));
  } catch (err) {
    console.log(err);
  }
});

// POST
server.post("/api/cars", async (req, res) => {
  try {
    const payload = {
      make: req.body.make,
      model: req.body.model,
      mileage: req.body.mileage
    };

    const [id] = await db("cars").insert(payload);

    res.json(
      await db("cars")
        .where("VIN", id)
        .first()
    );
  } catch (err) {
    console.log(err);
  }
});

server.listen(8000, () => console.log("*** API ON PORT: 8000 ***"));
