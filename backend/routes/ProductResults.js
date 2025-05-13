import express from "express";
import { getBrandPopularity } from controllers/ProductResultsController;

const router = express.Router();

router.get("/BrandPopularity", getBrandPopularity)

export default router;

