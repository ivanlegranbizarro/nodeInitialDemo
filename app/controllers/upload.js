import path from "path";

const __dirname = path.resolve();

const uploadFile = ( req, res ) => {
    if ( !req.files ) {
        return res.status( 400 ).json( "No files were uploaded." );
    }

    const file = req.files.myFile;
    const path = __dirname + "/uploads/" + file.name;
    if ( file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/gif" ) {
        file.mv( path, ( err ) => {
            if ( err ) {
                return res.status( 500 ).json( err );
            }
            return res.json( { status: "success", path: path } );
        } );
    } else {
        return res.status( 400 ).json( "File type not supported." );
    }
};

export default uploadFile;
