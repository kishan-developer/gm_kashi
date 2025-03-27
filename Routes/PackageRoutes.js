
const express = require("express");
const { createPackage, getAllPackages, getOnePackage, updatePackage, deletePackage } = require("../Controllers/Package_Manage");

const router = express.Router();


router.post("/create", createPackage)


router.get("/all", getAllPackages)


router.get("/:_id", getOnePackage)


router.put("/:_id", updatePackage);

router.delete("/:_id", deletePackage)



module.exports = router;