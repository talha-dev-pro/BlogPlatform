const { v4: uuid } = require("uuid");
const { hash } = require("bcrypt");
const userModel = require("../models/userModel");

module.exports = {
  createUser: async (body) => {
    try {
      body.userId = uuid();
      body.password = await hash(body.password, 10);
      const user = await userModel.createUser(body);
      if (user.error) {
        return {
          error: user.error,
        };
      }
      return { response: user.response };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
