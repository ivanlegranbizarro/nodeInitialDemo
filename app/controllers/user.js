
export const infoUser = ( req, res ) => {
  res.json( {
    nom: 'Iván Legrán',
    edat: 37,
    url: `http://localhost:3000/${ req.originalUrl }`
  } );
};
