const mongoose = require("mongoose");

exports.connect = async function () {
  const db_url =
    process.env.NODE_ENV === "production"
      ? process.env.database_url
      : "mongodb://localhost:27017/proudcts";

  await mongoose.connect(db_url);
};
