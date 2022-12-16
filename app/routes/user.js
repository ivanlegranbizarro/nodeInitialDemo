import express from "express";
import { infoUser } from "../controllers/user.js";

const router = express.Router();

/* GET enviant missatge sol·licitat per l'exercici. */
router.get( '/', infoUser );

export default router;
