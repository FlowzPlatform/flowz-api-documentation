let config = require("./swagger.json") 

config.host += process.env.HOST
module.exports = {
    PORT : process.env.PORT,
    HOST: process.env.HOST
};