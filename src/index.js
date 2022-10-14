const express = require('express');
const app = express();

const route=require("./routes/route")

app.use(express.json());
app.use(express.urlencoded({extended:true}))


const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Pratice:MVLNdVEz62Td6t7j@cluster0.q9vy5.mongodb.net/Delostyle", { useNewUrlParser: true })
    .then(() => console.log("mongoDB is Connected!!!"))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT||3000, function() {
    console.log('Express app running on port: ' ,process.env.PORT||3000)
});