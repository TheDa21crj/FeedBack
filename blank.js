const router = require("./Router/auth");

router.post("/signin", (req, res) => {
  console.log(req.body);
});
