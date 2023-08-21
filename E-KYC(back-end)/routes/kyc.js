const express = require("express")
const router = express.Router()

const kycController = require("../controllers/kycController")

router.post("/search_kyc", kycController.searched)

router.post("/create_kyc", kycController.created)

router.post("/upload_documents", kycController.documents)

module.exports = router