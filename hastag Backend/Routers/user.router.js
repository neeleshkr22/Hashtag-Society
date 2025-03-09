import express from "express";
import { register, login} from "../Controllers/user.controller.js";

const router  = express.router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;