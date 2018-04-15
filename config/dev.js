const { accessKeyId, secretAccessKey } = require("../awsKeys");

module.exports = {
  googleClientID:
    "964808011168-29vqsooppd769hk90kjbjm5gld0glssb.apps.googleusercontent.com",
  googleClientSecret: "KnH-rZC23z4fr2CN4ISK4srN",
  mongoURI: "mongodb://blog-dev:blog-dev@ds239029.mlab.com:39029/blog_dev",
  cookieKey: "123123123",
  redisUrl: "redis://127.0.0.1:6379",
  accessKeyId,
  secretAccessKey
};
