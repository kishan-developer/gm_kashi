
const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        case constants.NOT_FOUNT:
            res.json({
                title: "Not Fount",
                message: err.message,
                stackTrace: err.stack,
            });

        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack,
            })

        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack,
            })

        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack,
            })

        default:
            console.log("No Error, All good!");
            break;
    }

};

module.exports = errorHandler;
// without using this middleware error give in html formate
// if middleware fuction are halp to conver err in json formate

// stackTrace get the error object 
