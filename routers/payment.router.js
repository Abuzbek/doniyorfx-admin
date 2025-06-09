import { Router } from "express";
import {
  PaymentCSVDownloader,
  PaymentCreateController,
  PaymentFetchController,
  PaymentUpdateController,
} from "../controllers/payment.controller.js";
import upload from "../utils/file.js";
const router = Router();

router.get("/", PaymentFetchController);
router.get("/csv", PaymentCSVDownloader);
router.post("/", PaymentCreateController);
router.patch("/:id", upload.single("file"), PaymentUpdateController);
export default router;
