import { DataTypes } from "sequelize";
import { sequelize } from "../Databases/connection.database.js";



export const urls = sequelize.define('urls',

    {
        long_url: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        short_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: () => new Date(),
        }
    },

    {
        freezeTableName: true,
        timestamps: false,
    }
)