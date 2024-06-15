const { models } = require("./index");

module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });
      return {
        response: {
          message: "user created successfully",
          response: user.dataValues,
        },
      };
    } catch (error) {
      return {
        error: {
          message: "not created",
          error: error,
        },
      };
    }
  },
};
