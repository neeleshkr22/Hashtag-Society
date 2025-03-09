import express from "express";
import { createForm, getForm } from "../Controllers/form.controller.js";

const router  = express.Router();

router.post('/createForm', createForm);
router.get('/getForm', getForm);