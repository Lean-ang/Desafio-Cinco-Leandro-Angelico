import { URI } from "../db/db.config.js";
import app from "../app/app.js";
import { ENV_CONFIG_PROCES } from '../app/config.js';
import mongoose from 'mongoose';


const PORT = ENV_CONFIG_PROCES.PORT || 8080;


app.listen(PORT, async () => {
    await mongoose.connect(URI)
    const dataSource = URI.split('/')
    const index = dataSource.length - 1
    console.log(`
    Server up and running in PORT: ${PORT}
    Connected to database: ${dataSource[index]}
    `);
});
