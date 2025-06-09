import { Router } from "express";
import {
  RegisteredCSVDownloader,
  RegisteredCreateController,
  RegisteredFetchController,
} from "../controllers/registered.controller.js";

const router = Router();

router.get("/", RegisteredFetchController);
router.post("/", RegisteredCreateController);
router.get("/csv", RegisteredCSVDownloader);
export default router;
