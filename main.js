import express from "express";

const app = express();
app.use(express.static("./"));

const port = 8000
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});