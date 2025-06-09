import { Registered } from "../models/registered.model.js";
import { CreateCsvRegisteredService } from "../services/csv.service.js";

export const RegisteredCreateController = async (req, res) => {
  const registered = new Registered({
    ...req.body,
  });
  const currentRegistered = await registered.save();
  res.json(currentRegistered);
};

export const RegisteredFetchController = async (req, res) => {
  const RegisteredModel = await Registered.find({});
  res.json(RegisteredModel);
};

export const RegisteredCSVDownloader = async (req, res) => {
  const RegisteredModel = await Registered.find({}).sort({ createdAt: "desc" });
  await CreateCsvRegisteredService(RegisteredModel, res);
};
