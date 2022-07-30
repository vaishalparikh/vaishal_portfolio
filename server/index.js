const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

dotenv.config();
const db = require("./db");
const contactDetail = require("./modal/contactDetail");

const app = express();
const port = process.env.PORT || 3001;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/out")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/out/index.html"));
});

app.post("/contact", async (req, res) => {
  try {
    const data = await contactDetail.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      message: req.body.message,
    });
    res.json({ message: "Data saved successfully" });
  } catch (e) {
    res.status(400).json({
      msg: "Something went wrong"
   });
    // res.json({ err: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`app listen on port ${port}`);
  db();
});
