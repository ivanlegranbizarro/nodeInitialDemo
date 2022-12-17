
export const time = ( req, res ) => {
  const { username } = req.body;
  const date = new Date();

  res.header( "Cache-control", "no-cache" );
  res.header( "Authorization", "Basic legran 1234" + Buffer.from( username ).toString( "base64" ) );


  res.json( { username, date } );
};
