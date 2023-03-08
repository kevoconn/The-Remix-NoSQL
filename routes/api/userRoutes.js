const router = require("express").Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser } = require("../../controllers/userController.js");

// /api/User
router.route("/").get(getUsers).post(createUser);

// /api/User/:UserId
router.route("/:UserId").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
