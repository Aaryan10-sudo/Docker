const { config } = require("dotenv");
const express = require("express");
const app = express();

config();
const port = process.env.PORT || 0o0;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This server is containarized");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
