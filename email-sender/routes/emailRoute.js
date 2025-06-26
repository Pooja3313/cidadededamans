const express = require("express");
const router = express.Router();
const { sendEmail,sendContactForm, sendReview,getPing } = require("../controllers/emailcontroller");

router.post("/subscribe", sendEmail);
router.post("/contact", sendContactForm);
router.post("/review", sendReview);
router.get("/ping", getPing);

module.exports = router;
