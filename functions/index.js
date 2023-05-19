const functions = require("firebase-functions")
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")("sk_test_51N8IvZSCiG7V11qJH7wIAFsLeradq6UsFmwzsd4xgawwoYe7wHsC8Y3ibmBo6RW3w422nZWaSmNS5amTPGbnBpvX00m6kPXLXf")
const app = express();
app.use(cors({ origin: true }))
app.use(express.json())
app.get('/', (request, response) => response.status(200).send("hello world"))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
          amount: total,
          currency: "USD",
          payment_method_types: ['card'],
        });
        response.status(201).send({
          clientSecret: paymentIntent.client_secret,
        });    
})
exports.api = functions.https.onRequest(app)
