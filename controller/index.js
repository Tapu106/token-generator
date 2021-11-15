const dayjs = require("dayjs");
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.ACCESS_TOKEN_KEY;
exports.generateToken = (req, res, next) => {
  const payLoad = {
    key: "F00tyLight",
    createdAt: dayjs().millisecond(1).toISOString(),
  };
  const accessToken = jwt.sign(payLoad, JWT_KEY);
  res.json({ accessToken });
};
