import express from "express";
const lipaNaMpesaRoute = express.Router();
import {
  initiateSTKPush,
  stkPushCallback,
  confirmPayment,
} from "../controllers/lipanampesa.js";

//middleware  for the authorization of all Safaricom requests.
import { accessToken } from "../middlewares/generateAccessToken.js";

//stkPush route will initiate stk push popup on the users phone.
lipaNaMpesaRoute.route("/stkPush").post(accessToken, initiateSTKPush);

//route Safaricom sends the results of the stk push.
lipaNaMpesaRoute.route("/stkPushCallback/:Order_ID").post(stkPushCallback);

//route will use the CheckoutRequestID to confirm payment details. The CheckoutRequestID comes from successfully executing the stk push.
lipaNaMpesaRoute
  .route("/confirmPayment/:CheckoutRequestID")
  .post(accessToken, confirmPayment);

export default lipaNaMpesaRoute;
