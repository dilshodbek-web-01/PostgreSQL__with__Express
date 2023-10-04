const { Router } = require("express");
const { getCustomers } = require("../controller/customers.ctr");

const router = Router();

router.get("/read", getCustomers);

module.exports = router;