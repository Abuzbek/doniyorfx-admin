import mongoose from "mongoose";
import { Registered } from "../models/registered.model.js";
import { add } from "../componentLoader.js";

const registeredNavigation = {
  name: "Ro'yxatdan o'tganlar",
  icon: "User",
};
export const RegisteredResource = {
  resource: Registered,
  options: {
    navigation: registeredNavigation,

    properties: {
      _id: {
        isVisible: false,
      },
      updatedAt: {
        isVisible: false,
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
      //     const deletedUser = await Registereds.findByIdAndDelete({ _id });
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
