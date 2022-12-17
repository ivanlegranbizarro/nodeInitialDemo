import express from "express";
import logger from "morgan";
import usersRouter from "./routes/user.js";
import uploadRouter from "./routes/upload.js";
import timeRouter from "./routes/time.js";
import pokemonRouter from "./routes/pokemon.js";
import fileUpload from "express-fileupload";
import { error404 } from "./routes/error404.js";

const app = express();


app.use( fileUpload() );

app.use( logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );

app.use( '/user', usersRouter );
app.use( '/upload', uploadRouter );
app.use( '/time', timeRouter );
app.use( '/pokemon', pokemonRouter );

app.use( error404 );


const PORT = process.env.PORT || 3000;

app.listen( PORT, () => console.log( `Server is running on http://localhost:${ PORT }` ) );
