import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ShippingSchema = new Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    PaymentMethod: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, {
    timestamps: true,
});

const Shipping = mongoose.model('Shipping', ShippingSchema);

export default Shipping;