import express from "express";
import { connectKafka } from "./services/kafkaClient.js";

const app = express();
const PORT = 8081;

// Connect to Kafka consumer
connectKafka().catch(console.error);

app.get("/", (req, res) => {
  res.send("Welcome to the Ticketing Service!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
