var mongoose = require("mongoose");

module.exports = new mongoose.Schema(
    {
        code: {
            type: String,
            requiered: true
        },
        price: {
            type: Number,
            required:true
        },
        description: {
            type: String,
            requiered: true
        },
        quantity: {
            type: Number,
            requiered: true
        },
        minimum: {
            type: Number,
            requiered: true
        }
    }
);
