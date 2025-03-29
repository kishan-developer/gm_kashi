const express = require("express");
const { createBlogPost, updateBlogPost, deleteBlogPost, getBlogPost, getAllBlogPost } = require("../Controllers/BlogPostController");
const validateToken = require("../Middlewares/validateToken")
const router = express.Router();

// create a new blog post 
router.post("/create", createBlogPost);

// update a  blog post using id
router.put("/:_id", validateToken, updateBlogPost );

// delete  blog post using id
router.delete("/:_id", validateToken, deleteBlogPost);

// get a one blog post using id
router.get("/:_id", getBlogPost);

// get a all blog post 
router.get("/", getAllBlogPost);


module.exports = router;