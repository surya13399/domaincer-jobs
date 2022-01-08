const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect('mongodb+srv://surya:surya123@cluster0.cemih.mongodb.net/sheyjobsudemy?retryWrites=true&w=majority' , {useNewUrlParser : true});
         console.log('Mongo DB Connection success')
     } catch (error) {
         console.log('Mongo DB Connection failed')
     }

}

module.exports = mongoose