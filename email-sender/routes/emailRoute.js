const express = require("express");
const router = express.Router();
const { sendEmail,sendContactForm, sendReview } = require("../controllers/emailcontroller");

router.post("/subscribe", sendEmail);
router.post("/contact", sendContactForm);
router.post("/review", sendReview);

module.exports = router;
