const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home route");
});

const TodosRoute = require("./modules/todos/todos.routes");
router.use("/todos", TodosRoute);

const UserAuthRoute = require("./modules/auth/auth.routes");
router.use("/user-auth", UserAuthRoute);

const TranslationRoute = require("./modules/translations/translations.routes");
router.use("/translations", TranslationRoute);

module.exports = router;
