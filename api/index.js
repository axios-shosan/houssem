const express = require("express");
const cors = require("cors");
const app = express();

const productRouter = require("./modules/product.route");

app.use(
  cors({
    origin: (origin, callback) => {
      //   const accepted_origins = [origin, "http://localhost:3000"];
      const accepted_origins = [origin, "*"];
      const origin_accepted = accepted_origins.includes(origin);
      callback(
        !origin_accepted && new Error("Request origin not accepted."),
        origin_accepted && origin
      );
    },
    credentials: true,
  })
);

app.use(express.json());

app.use("/products", productRouter);

app.use("*", (req, res, next) => {
  res.status(404).json({
    err: "resource_not_found",
    message: "Resource not found.",
  });
});

require("./database.conf").connect(); //connecting to a database

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
