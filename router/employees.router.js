const { Router } = require("express");
const { getEmployees } = require("../controller/employees.ctr");

const router = Router();

router.get("/read", getEmployees);

module.exports = router;