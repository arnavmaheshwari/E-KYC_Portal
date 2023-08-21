const express = require("express")
const router = express.Router()

const authenticationController = require("../controllers/authenticationController")

router.post("/log_in", authenticationController.logged)

module.exports = router