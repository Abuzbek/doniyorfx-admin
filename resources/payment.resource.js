import { Payments } from "../models/payments.model.js"
import { add } from "../componentLoader.js";

const paymentsNavigation = {
  name: "Tolovlar",
  icon: "DollarSign",
};

export const PaymentResource = {
  resource: Payments,
  options: {
    navigation: paymentsNavigation,
    properties: {
      _id: {
        isVisible: false,
      },
      updatedAt: {
        isVisible: false,
      },
      course: {
        components: {
          list: add("components/course.jsx", "Course"),
          show: add("components/course-show.jsx", "CourseShow"),
        },
      },
      plan: {
        components: {
          list: add("components/plan.jsx", "Plan"),
          show: add("components/plan-show.jsx", "PlanShow"),
        },
      },
      file: {
        components: {
          list: add("components/photo-for-list.jsx", "PhotoForList"),
          show: add("components/photo-for-show.jsx", "PhotoForShow"),
          // show: add("components/plan.jsx", "Plan"),
        },
      },
    },
    actions: {
      show: {
        // showInDrawer: true,
      },
      edit: { isAccessible: false },
      new: { isAccessible: false },
      delete: { isAccessible: false },
      bulkDelete: { isAccessible: false },
      // delete: {
      //   redirectUrl: "/admin/resources/Users",
      //   handler: async (request, response, context) => {
      //     const { record, currentAdmin } = context;
      //     const _id = record.params._id;
      //     const deletedUser = await Payments.findByIdAndDelete({ _id });
      //     console.log(deletedUser);
      //     return {
      //       record: record.toJSON(currentAdmin),
      //       msg: deletedUser,
      //     };
      //   },
      // },
    },
    branding: {
      companyName: "Amazing c.o.",
    },
  },
};
