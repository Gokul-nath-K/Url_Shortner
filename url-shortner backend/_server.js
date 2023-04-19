import express from "express";

import router from './src/Routers/router.js';
import { sequelize } from "./src/Models/connection.js";


const app = express();
const port = 8080;


app.use(express.json());
app.use('/url', router);



sequelize.sync({ alter: true }).then(() => {

    console.log('Models are synced successfully');

    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`);
    });

}).catch((err) => {
    console.log(`error: ${err}`);
})

