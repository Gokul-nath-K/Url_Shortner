import { Sequelize } from "sequelize";
import { dbConfig } from '../Config/db.config.js';


export const sequelize = new Sequelize(

    dbConfig.DATABASE,
    dbConfig.USER_NAME,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
        logging: false,
    }
)


try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');

} catch (error) {
    console.error('Unable to connect to the database:', error);
}