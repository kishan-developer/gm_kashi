const mongoose = require("mongoose");

const Package_Model = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please add service title"],
        },
        ImageUrl: {
            type:String,
        },
        content: {
            type: "String",
            required: [true, "Please add service content "]
        },
        days: {
            type:String,
        },
        destination: {
            type: [String]
        }
    },
    {
        timestamps: true, // Corrected to `timestamps` (plural)
    }
);

module.exports = mongoose.model("Package_Model", Package_Model);
