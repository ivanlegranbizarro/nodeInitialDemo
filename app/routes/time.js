import express from "express";
import { time } from "../controllers/time.js";
import basicAuth from "../middlewares/timeAuth.js";

const router = express.Router();

/*
Crea un endpoint /time que rebi per POST com a paràmetre un JSON amb el nom d'usuari/ària i retorni un objecte JSON que contingui l'hora i data actual. Inclogui un middleware que afegeixi la capçalera Cache-control: no-cache. Habiliti CORS (Cross-Origin Resource Sharing) en les respostes, sigui mitjançant Express o mitjançant un altre middleware.
*/

router.post( "/", basicAuth, time );

export default router;
