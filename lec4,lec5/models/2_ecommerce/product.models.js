import mongoose from "mongoose";

const productScgema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        productImg: {
            type: String
        },
        stock: {
            default: 0,
            type: Number
        },
        catagory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }

    },
    { timestamps: true }
)

export const Product = mongoose.model('Product', productScgema)