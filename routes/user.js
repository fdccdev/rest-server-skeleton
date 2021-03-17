const { Router } = require("express");
const { usersGet, usersDelete, usersPost, usersPut } = require("../controllers/users");

const router = Router();

router.get("/", usersGet);

router.post("/", usersPost);

router.put("/:id", usersPut);

router.delete("/", usersDelete);

module.exports = router;
