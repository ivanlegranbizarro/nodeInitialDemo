import Game from "../models/games.js";
import User from "../models/users.js";


export const createUser = async ( req, res ) => {
  try {
    const { username } = req.body;
    let message;

    if ( username === "" ) {
      const date = new Date();
      const anonymousUsername = `Anònim-${ date.getTime() }`;
      await User.create( { username: anonymousUsername } );
      message = "Player created correctly as 'Anònim' user";
    } else {
      const user = await User.findOne( { where: { username } } );
      if ( user ) {
        return res.status( 409 ).json( { message: "User already exists" } );
      }
      await User.create( { username } );
      message = `Player created correctly with the username of ${ username }`;
    }

    res.status( 201 ).json( { message } );
  } catch ( error ) {
    res.status( 500 ).json( error );
  }
};

export const getUsers = async ( req, res ) => {
  try {
    const users = await User.findAll();
    const usersList = users.map( ( { id, username } ) => ( { id, username } ) );

    for ( const user of usersList ) {
      const games = await Game.findAll( { where: { jugadorId: user.id } } );
      if ( games.length > 0 ) {
        const wins = games.filter( ( game ) => game.winner === true );
        const percentage = ( wins.length / games.length ) * 100;
        user.percentage = Math.round( percentage * 100 ) / 100;
      }
    }
    res.status( 200 ).json( usersList );
  } catch ( error ) {
    res.status( 500 ).json( error );
  }
};

export const updateUser = async ( req, res ) => {
  try {
    const { username } = req.body;
    const { id } = req.params;
    const user = await User.findOne( { where: { id } } );
    if ( !user ) {
      return res.status( 404 ).json( { message: "User not found" } );
    }

    await User.update( { username }, { where: { id } } );
    res.status( 200 ).json( { message: "Player updated correctly" } );
  } catch ( error ) {
    res.status( 500 ).json( error );
  }
};
