// We use express to create our servers endpoints, and listen for & respond to requests from the frontend
import express from "express";
// We use dotenv so that we can access our environment variables
import "dotenv/config";
// We import our index.js so that we can query our database
import * as db from "./db/index.js";

const requestHandler = express();


const port = process.env.PORT;
requestHandler.use(express.json());
requestHandler.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });



requestHandler.get("/api/v1/skincare-analysis-data", async (req, res) => {
  try {
    const dbResponse = await db.query("select * from product_results limit 5");
    res.send(dbResponse.rows);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Database error" });
  }
})

requestHandler.get("/api/v1/BrandPopularity", async (req, res) => {
  try {
    const dbResponse = await db.query("SELECT brand, AVG(rank) as popularity FROM product_results GROUP BY brand");
    const result = dbResponse.rows.map ((row) => (
      {brand: row.brand, popularity: parseFloat(row.popularity.toFixed(1))
      }
    ))
    res.json(result)
  } catch (error) {
    console.error("Could not show data:", error)
    res.status(500).json({ error:"Server error" })
  }
})