import express from 'express'
const router = express.Router()
import {
    initiateSTKPush,
    stkPushCallback,
    confirmPayment
} from "../controllers/controllers.lipanampesa.js";

//middleware  for the authorization of all Safaricom requests.
import {accessToken} from "../middlewares/middlewares.generateAccessToken.js";

//stkPush route will initiate stk push popup on the users phone.
router.route('/stkPush').post(accessToken,initiateSTKPush)

//route Safaricom sends the results of the stk push.
router.route('/stkPushCallback/:Order_ID').post(stkPushCallback)

//route will use the CheckoutRequestID to confirm payment details. The CheckoutRequestID comes from successfully executing the stk push.
router.route('/confirmPayment/:CheckoutRequestID').post(accessToken,confirmPayment)

export default router
