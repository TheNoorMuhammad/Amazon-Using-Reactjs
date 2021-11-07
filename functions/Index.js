const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Jr6eGIXSz9Y4bvHRDmUH5qncuI5pFcfGzLfj9rj2uygAULoaWiNQudRnok0VG24Tvdt54KCN4TfNJTx5YiM6ZVY00pjZbmTG1')

//API
//App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payment/create', async(request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    //OK Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen command
exports.api = functions.https.onRequest(app)
// (http://localhost:5001/fir-b091f/us-central1/api