const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        usenewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("DB connection successfull"))
    .catch((error) => {
        console.log("Issue in DB Connection");
        console.error(error);
        process.exit(1);
    });
}

module.exports = dbConnect;