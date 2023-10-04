const { Router } = require("express");
const { getCars } = require("../controller/cars.ctr");

const router = Router();

router.get("/read", getCars);

module.exports = router;