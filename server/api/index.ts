import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./lib/db";
import { z } from "zod";

dotenv.config();

const port = process.env.PORT || 8000;

const app: Express = express();

const QueryParamsSchemaZ = z.object({
  year: z.number().optional(),
  country: z.string().optional(),
  sector: z.string().optional(),
  pestle: z.string().optional(),
  topic: z.string().optional(),
  region: z.string().optional(),
  source: z.string().optional(),
});

app.use("/filters", async (req: Request, res: Response) => {
  const db = await connectToDatabase();
  const blackcofferCollection = db.collection("data");

  const blackcoffers = await blackcofferCollection
    .find({})
    .limit(1000)
    .toArray();

  if (!blackcoffers.length) {
    res.status(404).json({ message: "No data found" });
  }

  const getDataByKey = (key: string) => {
    const data = blackcoffers
      .filter((blackcoffer) => blackcoffer[key] !== null)
      .map((blackcoffer) => blackcoffer[key]);

    return [...new Set(data)];
  };

  const countries = getDataByKey("country");
  const sectors = getDataByKey("sector");
  const pestles = getDataByKey("pestle");
  const topics = getDataByKey("topic");
  const regions = getDataByKey("region");
  const sources = getDataByKey("source");
  const years = getDataByKey("published_year");

  res.json({
    years,
    countries,
    sectors,
    pestles,
    topics,
    regions,
    sources,
  });
});

app.use("/data", async (req: Request, res: Response) => {
  const db = await connectToDatabase();
  const blackcofferCollection = db.collection("data");

  const parsedQuery = QueryParamsSchemaZ.safeParse(req.query);

  if (!parsedQuery.success) {
    res.status(400).json({ message: parsedQuery.error });
  }

  const query = parsedQuery.data;

  const data = await blackcofferCollection
    .find({
      ...(query?.year && { published_year: query.year }),
      ...(query?.country && { country: query.country }),
      ...(query?.sector && { sector: query.sector }),
      ...(query?.pestle && { pestle: query.pestle }),
      ...(query?.topic && { topic: query.topic }),
      ...(query?.region && { region: query.region }),
      ...(query?.source && { source: query.source }),
    })
    .limit(1000)
    .toArray();

  if (!data.length) {
    res.status(404).json({ message: "No data found" });
  }

  function getDataByKey(key: string): Record<string, number> {
    return data.reduce((acc: Record<string, number>, current) => {
      const value = current[key];
      if (value) {
        if (!acc[value]) {
          acc[value] = 1;
        } else {
          acc[value]++;
        }
      }
      return acc;
    }, {});
  }

  const countries = getDataByKey("country");
  const sectors = getDataByKey("sector");
  const pestles = getDataByKey("pestle");
  const topics = getDataByKey("topic");
  const regions = getDataByKey("region");
  const sources = getDataByKey("source");

  res.json({
    total: data.length,
    countries,
    sectors,
    pestles,
    topics,
    regions,
    sources,
  });
});

app.use("/", async (req: Request, res: Response) => {
  res.send("Service is working fine");
});

app.listen(port, () => {
  console.log(`Server is running on port 8000`);
});
