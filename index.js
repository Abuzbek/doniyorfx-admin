import express from "express";
import path from "path";
import AdminJS, { ComponentLoader } from "adminjs";
import mongoose from "mongoose";
import * as AdminJSMongoose from "@adminjs/mongoose";
import "dotenv/config";
import { expressAuthenticatedRouter } from "./authenticateRouter.js";
import { __dirname, add, componentLoader } from "./componentLoader.js";
import { UserResource } from "./resources/users.resource.js";
import { PaymentResource } from "./resources/payment.resource.js";
import paymentRouter from "./routers/payment.router.js";
import paymentV2Router from "./routers/payment-v2.router.js";
import registeredRouter from "./routers/registered.router.js";
import bodyParser from "body-parser";
import cors from "cors";
import { pages } from "./customPage.js";
import { RegisteredResource } from "./resources/registered.resource.js";
import { PaymentV2Resource } from "./resources/payment-V2.resource.js";
AdminJS.registerAdapter({
  Database: AdminJSMongoose.Database,
  Resource: AdminJSMongoose.Resource,
});

const app = express();
// Very basic configuration of AdminJS.
const dashboardHandler = async () => {
  // Asynchronous code where you, e. g. fetch data from your database

  return { message: "Hello World" };
};

const adminJs = new AdminJS({
  resources: [
    UserResource,
    PaymentResource,
    // PaymentV2Resource,
    // RegisteredResource,
  ],
  options: {},
  componentLoader,
  pages,
  dashboard: {
    component: add("components/dashboard.jsx", "Dashboard"),
    handler: dashboardHandler,
  },
  properties: {
    components: {
      filter: add("components/course.jsx", "Course"),
    },
  },
  rootPath: "/admin",
});
app.use(cors({ origin: "*" }));
app.use(adminJs.options.rootPath, expressAuthenticatedRouter(adminJs));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/payment", paymentRouter);
app.use("/api/v2/payment", paymentV2Router);
app.use("/api/registered", registeredRouter);
app.use(express.static(path.join(__dirname, "public")));
// Run the server.
const run = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  });
  app.listen(8080, () => console.log(`Example app listening on port 8080!`));
};
run();
