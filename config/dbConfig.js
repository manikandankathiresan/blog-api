const mongoose = require('mongoose');


const initDB = (URI) => {
    mongoose.connect(URI)
        .then(() => console.log('DB Connected successfull'))
        .catch((err) => console.log(err))
}

module.exports = { initDB }