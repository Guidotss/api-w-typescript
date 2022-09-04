import mongoose from "mongoose";
import { config } from "./config";

mongoose.connect(config.urlAtlas, config.options)
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err));

