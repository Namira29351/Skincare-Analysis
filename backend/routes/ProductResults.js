import express from "express";
import { getBrandPopularity, getProductPopularity, getProductPrice } from "../controllers/ProductResultsController.js";

const router = express.Router();

router.get("/BrandPopularity", getBrandPopularity);
router.get("/ProductPopularity", getProductPopularity);
router.get("/ProductPrices", getProductPrice);

export default router;

