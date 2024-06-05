"use server";
import { MongoClient } from "mongodb";
import { cache } from "react";

const client = new MongoClient(process.env.MONGODB_URL!);

export const getData = async (sortBy: "number" | "latest") => {
  try {
    await client.connect();

    const database = client.db("sawingz-db");
    const collection = database.collection("chatHistoryCollection");

    if (sortBy === "latest") {
      const data = await collection
        .aggregate([
          {
            $group: {
              _id: "$userId",
              count: { $sum: 1 },
              latestRequestProcessedAt: { $max: "$requestProcessedAt" },
            },
          },
          { $sort: { latestRequestProcessedAt: -1 } },
        ])
        .toArray();
      return data;
    } else {
      const data = await collection
        .aggregate([
          {
            $group: {
              _id: "$userId",
              count: { $sum: 1 },
            },
          },
          { $sort: { count: -1 } },
        ])
        .toArray();
      return data;
    }
  } catch (error: any) {
    console.log("Error occurred:-", error);
  }
};
