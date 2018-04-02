const express = require("express");

const router = express.Router();
// const apiPath = "/api";

router.use(`api/users`, require("./users"));

module.exports = router;
