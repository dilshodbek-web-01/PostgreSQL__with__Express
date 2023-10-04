const { Router } = require("express");
const { getFruits } = require("../controller/fruits.ctr");

const router = Router();

router.get("/read", getFruits);

module.exports = router;