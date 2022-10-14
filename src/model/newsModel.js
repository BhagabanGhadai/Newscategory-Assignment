const mongoose = require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
const newsSchema = new mongoose.Schema({
heading:{
    type:String,
    required:true
},
category:{
    type:[ObjectId],
    ref:'categoryModel',
    required:true
},
description:{
    type:String,
    required:true
}
}, { timestamps: true })

module.exports = mongoose.model('newsModel', newsSchema)