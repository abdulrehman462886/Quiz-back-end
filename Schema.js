const mongoose =  require('mongoose')

const dataSchema = new mongoose.Schema({
    statement:String,
    a:String,
    b:String,
    c:String,
    d:String,
    e:String
})

module.exports = mongoose.model("data", dataSchema)