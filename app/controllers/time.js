

export const time = ( req, res ) => {
  const { username } = req.body;
  const date = new Date();

  res.json( { username, date } );
};
