import express from "express";
import logger from "morgan";
import usersRouter from "./routes/user.js";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import { dbConnectMysql } from "./config/mysql.js";

dotenv.config();

const app = express();

app.use( fileUpload() );

app.use( logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

app.use( '/players', usersRouter );

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

app.listen( PORT, () => console.log( `Server is running on http://localhost:${ PORT }` ) );


dbConnectMysql();
