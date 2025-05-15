// We use express to create our servers endpoints, and listen for & respond to requests from the frontend
import express from "express";
// We use dotenv so that we can access our environment variables
import "dotenv/config";
// We import our index.js so that we can query our database

import productResultsRoutes from "./routes/productResults.js";


const requestHandler = express();


const port = process.env.PORT;
requestHandler.use(express.json());
requestHandler.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });



requestHandler.use("/api/v1", productResultsRoutes);