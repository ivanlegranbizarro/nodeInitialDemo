import path from "path";

const __dirname = path.resolve();

const uploadFile = ( req, res ) => {
    if ( !req.files ) {
        return res.status( 400 ).json( {
            status: "error",
            message: "No file uploaded"
        } );
    }

    const file = req.files.myFile;
    const path = __dirname + "/app/uploads/" + file.name;
    if ( file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/gif" ) {
        file.mv( path, ( err ) => {
            if ( err ) {
                return res.status( 500 ).json( {
                    status: "error",
                    message: err
                } );
            }
            return res.json( { status: "success", path: path } );
        } );
    } else {
        return res.status( 400 ).json( {
            status: "error",
            message: "Invalid file format"
        } );
    }
};

export default uploadFile;
