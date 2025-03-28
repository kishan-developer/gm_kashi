

const authorizeRoles = (...roles) => {
    console.log("roles", roles);
    return (req, res, next) => {
        console.log("User Data in Middleware:", req.user); // Debugging line

        if (!req.user || !req.user.role) {
            return res.status(403).json({ message: "Access Denied: No role assigned" });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access Denied: Unauthorized role" });
        }
        next();
    };
}


module.exports = authorizeRoles;