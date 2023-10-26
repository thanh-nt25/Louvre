const mongoose = require("mongoose");

const password = "fLWO3bVB833BD7lE"

module.exports = () => {
    mongoose.connect(`mongodb+srv://Louvre:${password}@louvre.5m6ozod.mongodb.net/?retryWrites=true&w=majority`)
}
