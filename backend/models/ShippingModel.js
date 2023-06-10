import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ShippingSchema = new Schema({
    fullname: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    paymentMethod: { type: String, required: true },
}, {
    timestamps: true,
});

const Shipping = mongoose.model('Shipping', ShippingSchema);

export default Shipping;