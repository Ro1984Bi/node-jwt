import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/company_db')
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))