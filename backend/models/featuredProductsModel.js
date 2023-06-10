import mongoose from "mongoose";
const Schema = mongoose.Schema;

const featuredProductsSchema = new Schema({
    Gadget_Name: { type: 'String', required: true },
    slug: { type: 'String', required: true },
    category: { type: 'String', required: true },
    Img_Url: { type: 'String', required: true },
    price: { type: 'Number', required: true },
    countInStock: { type: 'Number', required: true },
    Specs: { type: 'String', required: true },
},
{
    timestamps: true
}
);

const FeaturedProducts = mongoose.model("FeaturedProducts", featuredProductsSchema);
export default FeaturedProducts;