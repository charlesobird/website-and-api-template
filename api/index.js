const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors())

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is online"
  })
});

app.listen(3000, () =>
  console.log("Server ready at: http://localhost:3000")
);
