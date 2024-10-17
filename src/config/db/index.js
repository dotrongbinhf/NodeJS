const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/My_NodeJS_Learning_Database')
            .then(() => console.log("Connected to databases"));
    } catch (error) {
        console.log("failure!!!!!!!!");
    }    
}

module.exports = { connect };
