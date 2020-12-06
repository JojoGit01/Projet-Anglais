const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://admin:ifcfntnp45fx9Ug7@cluster0.meaig.mongodb.net/project?retryWrites=true&w=majority"

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;