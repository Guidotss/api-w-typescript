
interface IConfig {
    urlAtlas:string
    urlLocal:string
    options:Object
}

export const config : IConfig = {
    urlAtlas: 'mongodb+srv://Guido:guidomartin@cluster0.tijy1to.mongodb.net/Task?retryWrites=true&w=majority',
    urlLocal: 'mongodb://localhost:27017/Task',
    options: { useNewUrlParser: true, useUnifiedTopology: true }
}

