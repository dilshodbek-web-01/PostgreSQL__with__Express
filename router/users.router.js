const { Router } = require("express");
const {
  getUsers,
  getUserInfo,
  createUser,
  getOneUser,
  deleteUser,
  updateUser,
} = require("../controller/users.ctr");

const router = Router();

router.get("/read", getUsers);
router.get("/read/:id", getOneUser);
router.get("/read/:id", getUserInfo);
router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
