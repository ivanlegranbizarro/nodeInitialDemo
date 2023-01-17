/*
Afegeix un middleware a l'endpoint anterior que retorni un HTTP Status 401 - Unauthorized si la capçalera de la petició no conté autenticació bàsica (usuari/ària i contrasenya).*/
import auth from "basic-auth";

const basicAuth = ( req, res, next ) => {
    const credentials = auth( req );
    if ( !credentials || credentials.name !== "legran" || credentials.pass !== "1234" ) {
        res.status( 401 ).json( { error: "Unauthorized" } );
    } else {
        next();
    }
};


export default basicAuth;
