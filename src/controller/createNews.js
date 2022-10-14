const newsModel = require('../model/newsModel')
const categoryModel=require('../model/categoryModel')

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
};

const createNews = async function (req, res) {
    try {
        let dataComesFromUser = req.body
        if (!Object.keys(dataComesFromUser).length)
            return res.status(400).send({ status: false, msg: "please enter valid inputs" });

        if (!isValid(dataComesFromUser.heading))
            return res.status(400).send({ status: false, msg: "please provide the news heading" });

        if (!isValid(dataComesFromUser.category))
            return res.status(400).send({ status: false, msg: "please provide the relevent category" });

        if (!isValid(dataComesFromUser.description))
            return res.status(400).send({ status: false, msg: "please provide the news description" });

        let categoryArr = dataComesFromUser.category.split(',')
        let catArr=[]
        for(let i=0;i<categoryArr.length;i++){
           let data= await categoryModel.findOne({category:categoryArr[i]})
           if(!data){
               let createCategory= await categoryModel.create({category:categoryArr[i]})
               catArr.push(createCategory._id.toString())
            }else{
                catArr.push(data._id.toString())
            }
           }
dataComesFromUser.category=catArr
        let newsCreate = await newsModel.create(dataComesFromUser)

        res.status(201).send({ status: true, msg: "News Created Sucessfully", data: newsCreate })

    } catch (err) {

        res.status(500).send({ status: false, error: err.message });
    }
}
module.exports = createNews