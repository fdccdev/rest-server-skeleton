const mongoose = require('mongoose');

//configuración conexión mongoose -> mongodb atlas
const connectionDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Database Connected!');
    } catch (error) {
        throw new Error('Ha ocurrido un error: ', error);
    }
}

module.exports = {
    connectionDB
}