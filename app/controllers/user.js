
export const infoUser = ( req, res ) => {
  res.json( {
    nom: 'Iván Legrán',
    edat: 37,
    url: req.originalUrl
  } );
};
