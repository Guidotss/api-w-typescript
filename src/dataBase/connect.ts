import mongoose, { mongo } from "mongoose";
import { config } from "./config";

mongoose.connect(config.urlLocal, config.options)
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err));

