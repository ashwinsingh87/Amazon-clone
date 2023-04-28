const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51N1PBzSDcl1gUysh62gxcfkagQcVljQ8lAYZNt5sJwTSNVMtHo2cSbLsnPLlGjfM6YJUWhGCei50qlwduFHg2Fzw00KMR1gfmF"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json);

app.get("/", (request, response) => response.status(200).send("hemloo duniya"));
app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received boom!!! for this amount>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "USD",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
