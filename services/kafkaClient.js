import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "ticketing-service",
  brokers: ["localhost:9092"],
});

export const consumer = kafka.consumer({ groupId: "ticketing-group" });

export async function connectKafka() {
  try {
    await consumer.connect();
    console.log("Connected to Kafka.");

    await consumer.subscribe({ topic: "movie-created", fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, message }) => {
        try {
          console.log(
            `Received message from topic ${topic}:`,
            JSON.parse(message.value.toString())
          );
        } catch (error) {
          console.error("Error processing message:", error);
        }
      },
    });
  } catch (error) {
    console.error("Kafka connection error:", error);
  }
}
