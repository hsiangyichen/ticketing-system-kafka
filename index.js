import express from "express";

const app = express();
const PORT = 8081;

app.get("/", (req, res) => {
  res.send("Welcome to the Ticketing Service!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
