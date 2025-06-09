import { add } from "./componentLoader.js";
import { PaymentV2s } from "./models/payment-V2.model.js";

export const pages = {
  excel: {
    component: add("components/custom-page.jsx", "Excel"),
    icon: "File",
    handler: async (request, response, context) => {
      const payments = await PaymentV2s.find({});
      return {
        payments,
      };
    },
  },
  // registeredExcel: {
  //   component: add("components/registered-page.jsx", "RegisteredExcel"),
  //   icon: "User",
  //   handler: async (request, response, context) => {
  //     const payments = await Registered.find({});
  //     return {
  //       payments,
  //     };
  //   },
  // },
  //   designSystemExamples: {
  //     component: DESIGN_SYSTEM_PAGE,
  //     icon: "Layout",
  //   },
};
