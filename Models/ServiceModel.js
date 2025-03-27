const mongoose = require("mongoose");

const serviceModel = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please add service title"],
        },
        ImageUrl: {
            type:String,
            required: [true, "Please add service imageUrl"]
        },
        content: {
            type: "String",
            required: [true, "Please add service content "]
        }
    },
    {
        timestamps: true, // Corrected to `timestamps` (plural)
    }
);

module.exports = mongoose.model("serviceModel", serviceModel);
