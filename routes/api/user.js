const express=require('express')
const { getAll, getOne, create, update, remove } = require('../../controller/api/user.js')



const router = express.Router()

router.get("/", getAll)
router.get("/:id", getOne)
router.post("/", create)
router.patch("/:id", update)
router.delete("/:id", remove)

module.exports = router