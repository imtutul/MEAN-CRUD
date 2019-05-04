const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/CrudDB',(err) => {
    if(!err)
        console.log('MongoDB database connection succeeded.');
    else
        console.log('Error in DB Connection : ' + JSON.stringify(err, undefined, 2));
})

module.exports = mongoose;