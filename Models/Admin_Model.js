const mongoose = require("mongoose");

const Admin_Model = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "Please add the firstname"],
        },
        lastname: {
            type: String,
            required: [true, "Please add the lastname"]
        },
        displayname: {
            type: String,
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        confirmPassword: {
            type: String
        },
        role: {
            type: String
        },
        occupation: {
            type: String
        },
        bio: {
            type: String
        },
        location: {
            type: String
        },
        website: {
            type: String
        },
        socialProfile: {
            type: [String]
        },
        trackingId: {
            type: String
        },
        amount: {
            type: String // course enrolled price 
        },
        creditMode: {
            type: String
        },
        paymentMode: {
            type: String
        },
        paymentStatus: {
            type: String
        },
        enrolledCourses: {
            type: [String]
        },
        wishlist: {
            type: [String] // Array of course IDs
        },
        cart: {
            type: [{
                courseId: String,
                // you might include price, discount info etc.
            }]
        }
    },
    {
        timestamps: true, // Corrected to `timestamps` (plural)
    }
);

module.exports = mongoose.model("Admin_Model", Admin_Model);
