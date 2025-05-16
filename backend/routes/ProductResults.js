import express from "express";
import { getBrandPopularity, getProductPopularity, getProductPrices } from "../controllers/productResultsController.js";

const router = express.Router();

router.get("/BrandPopularity", getBrandPopularity);
router.get("/ProductPopularity", getProductPopularity);
router.get("/ProductPrices", getProductPrices);

export default router;

