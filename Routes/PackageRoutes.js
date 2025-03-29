
const express = require("express");
const { createPackage, getAllPackages, getOnePackage, updatePackage, deletePackage } = require("../Controllers/Package_Manage");
const validateToken = require("../Middlewares/validateToken");

const router = express.Router();


router.post("/create", validateToken, createPackage)


router.get("/all", getAllPackages)


router.get("/:_id", getOnePackage)


router.put("/:_id", validateToken, updatePackage);

router.delete("/:_id", validateToken, deletePackage)



module.exports = router;