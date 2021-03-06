const express = require("express");
let router = express.Router();
let Collector = require("../utility/collector");
router.post("/login", Collector.getLogin);
router.post("/SignUp", Collector.UserSignUp);
router.post("/updatepassword", Collector.updatepassword);
router.post("/adddoubt", Collector.adddoubt);
router.post("/addcomment", Collector.addcomment);
router.post("/addanswer", Collector.addanswer);
router.post("/fetchdoubts", Collector.fetchdoubts);
module.exports = router;
