import * as db from "./db/index.js";

export const getBrandPopularity = async (req, res) => {
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
  }