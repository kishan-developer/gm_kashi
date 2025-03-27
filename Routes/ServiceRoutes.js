
const express = require("express");
const { createService, getAllService, getoneservice, updateservice, deleteservice } = require("../Controllers/Service_Manage");

const router = express.Router();


router.post("/create", createService)

// login user
// url -> /api/user_management/all_student
// method -> GET
// get all user list on only login 
router.get("/all", getAllService);


// login user
// url -> /api/user_management/getOneUser
// method -> GET
// get all user list on only login 
router.get("/:_id", getoneservice);


// url -> /api/user_management/update
// method -> PUT
router.put("/:_id", updateservice);


// url -> /api/user_management/deleteOne
// method -> DELETE
// delete one user data with current user email id and find user data is available or not than 
router.delete("/:_id", deleteservice);




module.exports = router;