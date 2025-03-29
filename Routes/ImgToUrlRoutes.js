
const express = require("express");
const { uploadfile } = require("../Controllers/ImgToUrl");
const validateToken = require("../Middlewares/validateToken");
const router = express.Router();


router.post("/uploadimg", validateToken, uploadfile);


module.exports = router;