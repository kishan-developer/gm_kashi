
const express = require("express");
const { uploadfile } = require("../Controllers/ImgToUrl");

const router = express.Router();


router.post("/uploadimg", uploadfile);




module.exports = router;