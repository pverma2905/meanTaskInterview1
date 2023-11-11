const mongoose = require("mongoose");
const DBconnection = mongoose.connect((process.env.MONGO_URL)).then(() => {
    console.log("DB connect is successfull")
}).catch((error) => {
    console.error("Error is connecting mongo atlas database ", error)
})

module.exports = DBconnection;
