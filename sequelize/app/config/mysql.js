import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import mysql from "mysql2";

dotenv.config();

const database = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const host = process.env.DATABASE_HOST;

const connection = mysql.createConnection( {
  host,
  user: username,
  password
} );

connection.query(
  `CREATE DATABASE IF NOT EXISTS ${ database };`,
  ( err, results ) => {
    if ( err, results ) {
      console.log( err, results );
    } else {
      console.log( "Database created!" );
    }
  }
);


const sequelize = new Sequelize( database, username, password, {
  host,
  dialect: "mysql"
} );


const dbConnectMysql = async () => {
  try {
    await sequelize.authenticate();
    console.log( "Connection has been established successfully." );
  } catch ( error ) {
    console.error( "Unable to connect to the database:", error );
  }
};


connection.end();


export {
  sequelize,
  dbConnectMysql
};
