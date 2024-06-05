"use server";
import { MongoClient } from "mongodb";
import { cache } from "react";

const client = new MongoClient(process.env.MONGODB_URL!);

export const getData = cache(async (sortBy: "number" | "latest") => {
  try {
    await client.connect();

    const database = client.db("sawingz-db");
    const collection = database.collection("chatHistoryCollection");

    let data;
    if (sortBy === "latest") {
      const data = await collection
        .aggregate([
          { $sort: { requestProcessedAt: -1 } },
          {
            $group: {
              _id: "$userId",
              count: { $sum: 1 },
            },
          },
        ])
        .toArray();
      return data;
    } else {
    }

    return data;
  } catch (error: any) {
    console.log("Error occurred:-", error);
  }
});
