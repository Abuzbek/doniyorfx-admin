import { PaymentV2s } from "../models/payment-V2.model.js";
import { CreateCsvService } from "../services/csv-v2.service.js";

export const PaymentCreateController = async (req, res) => {
  //   console.log(res);
  // console.log(req.file);
  // console.log(res);
  console.log(req.body);
  // const file = req.file;
  const payment = new PaymentV2s({
    ...req.body,
    course: "2",
    // file: file ? "/images/" + file.filename : "",
  });
  const currentPayment = await payment.save();
  res.json(currentPayment);
};
export const PaymentFetchController = async (req, res) => {
  const PaymentModel = await PaymentV2s.find({});
  res.json(PaymentModel);
};
export const PaymentUpdateController = async (req, res) => {
  const file = req.file;
  const data = {
    file: file ? "/images/" + file.filename : "",
  };
  PaymentV2s.updateOne({ _id: req.params.id }, { $set: data })
    .then((_data) => {
      res.json(_data);
    })
    .catch((err) => {
      console.log("Error is: " + err);
    });
};

export const PaymentCSVDownloader = async (req, res) => {
  const PaymentModel = await PaymentV2s.find({}).sort({ createdAt: "desc" });
  await CreateCsvService(PaymentModel, res);
};
