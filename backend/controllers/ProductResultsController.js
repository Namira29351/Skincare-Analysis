import * as db from "../db/index.js";

export const getBrandPopularity = async (req, res) => {
    try {
      const dbResponse = await db.query("SELECT brand, AVG(rank) as popularity FROM product_results GROUP BY brand");
      const result = dbResponse.rows.map ((row) => (
        {Brand: row.brand, Popularity: parseFloat(row.popularity.toFixed(1))
        }
      ))
      res.json(result)
    } catch (error) {
      console.error("Could not show data:", error)
      res.status(500).json({ error:"Server error" })
    }
  }


  export const getProductPrice = async (req, res) => {
    try {
      const dbResponse = await db.query(`
        SELECT "Label", AVG(price) as price 
        FROM product_results 
        GROUP BY "Label"
      `);
      const result = dbResponse.rows.map ((row) => (
        {Product: row.Label || row.label, Price: parseFloat(Number(row.price).toFixed(1))
        }
      ))
      res.json(result)
    } catch (error) {
      console.error("Could not show data:", error)
      res.status(500).json({ error:"Server error" })
    }
  }

  export const getProductPopularity = async (req, res) => {
    try {
      const dbResponse = await db.query(`
        SELECT "Label", AVG(rank) as popularity 
        FROM product_results 
        GROUP BY "Label"
      `);
      const result = dbResponse.rows.map ((row) => (
        {Product: row.Label || row.label, Popularity: parseFloat(row.popularity.toFixed(1))
        }
      ))
      res.json(result)
    } catch (error) {
      console.error("Could not show data:", error)
      res.status(500).json({ error:"Server error" })
    }
  }