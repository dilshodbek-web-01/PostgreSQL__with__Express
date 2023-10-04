const { Router } = require("express");
const { getCompany } = require("../controller/company.ctr");

const router = Router();

router.get("/read", getCompany);

module.exports = router;