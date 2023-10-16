const { Router } = require("express");
const AdminController = require("../controllers/AdminController.js");

const router = Router();

router.get("/teste", AdminController.pegaAdmin)

module.exports = router;