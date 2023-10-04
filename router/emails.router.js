const { Router } = require("express");
const { getEmails, createEmail, deleteEmail } = require("../controller/emails.ctr");

const router = Router();

router.get("/read", getEmails);
router.post("/create", createEmail);
router.delete("/delete/:id", deleteEmail);

module.exports = router;