const joi = require("joi");
const userService = require("../services/userService");

const createUserSchema = joi.object().keys({
  userName: joi.string().required(),
  password: joi.string().min(3).max(6).required(),
  confirmPassword: joi.ref("password"),
});

module.exports = {
  createUser: async (req, res) => {
    try {
      const validate = await createUserSchema.validateAsync(req.body);
      const user = await userService.createUser(validate);
      if (user.error) {
        return res.send({
          error: error.message,
        });
      }
      return res.send({
        response: user.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
