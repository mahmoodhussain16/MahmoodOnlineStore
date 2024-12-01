const express = require("express")
const { showHomePage, showDashboard, showRegister, showProfile, register, update, remove } = require("../../controller/web/user")


const router = express.Router()

router.get("/", showHomePage)
router.get("/dashboard", showDashboard)
router.get("/register", showRegister)
router.get("/users/:id", showProfile)
router.post("/users", register)
router.patch("/users/:id", update)
router.delete("/users/:id", remove)

module.exports = router