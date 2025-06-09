import mongoose from "mongoose";
import { Users, usersSchema } from "../models/users.model.js";

const usersNavigation = {
  name: "Foydalanuvchilar",
  icon: "User",
};
export const UserResource = {
  resource: Users,
  options: {
    navigation: usersNavigation,
    // titleProperty: 'Foydalanuvchilar',
    properties: {
      _id: {
        isVisible: false,
      },
      encryptedPassword: {
        isVisible: false,
      },
    },
    actions: {
      edit: { isAccessible: false },
      new: { isAccessible: false },
      delete: { isAccessible: false },
      bulkDelete: { isAccessible: false },
      // delete: {
      //   redirectUrl: '/admin/resources/Users',
      //   handler: async (request, response, context) => {
      //     const { record, currentAdmin } = context;
      //     const _id = record.params._id;
      //     const deletedUser = await Users.findByIdAndDelete({ _id });
      //     console.log(deletedUser);
      //     return {
      //       record: record.toJSON(currentAdmin),
      //       msg: deletedUser,
      //     };
      //   },
      // },
    },
  },
};
