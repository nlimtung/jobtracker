const JobModel = require('../models/job.js'); 

async function create(req,res) {
    try{
        let createPosting = await JobModel.create({
            company: req.body.company, 
             postLink: req.body.postLink, 
             status:"Pending/No Response"
        });
        res.status(200).json(createPosting)
    }
    catch(err){
        console.log(err)
    }
}


async function home (req, res) {
    try{
        let jobs = await JobModel.find({})
        res.status(200).json(jobs)

    }
    catch(err){
        console.log(err)
    }
}


async function index (req, res) {
    try{

        let jobs = await JobModel.find({$or: [{status:"Pending/No Response"}, { status:  "Interview"}]})
        res.status(200).json(jobs)

    }
    catch(err){
        console.log(err)
    }
}

async function rejectedIndex (req, res) {
    try{
        let jobs = await JobModel.find({status:"Rejected"})
        res.status(200).json(jobs)

    }
    catch(err){
        console.log(err)
    }
}

async function updateStatus (req, res) {
    try{

        if (req.body.status === "Interview"){
            const status = {
                interviewed: true,
                status: req.body.status, 
            }
            const newStatus = await JobModel.findOneAndUpdate ({_id: req.body.jobID}, status) 
         
            res.status(200).json(newStatus)
        }
        else {
            const status = {
                status: req.body.status, 
            }
            const newStatus = await JobModel.findOneAndUpdate ({_id: req.body.jobID}, status) 
            res.status(200).json(newStatus)
        }

        



    }
    catch (err){
        console.log(err)
    }
}

async function addToFavourite(req, res){
    try{
        console.log(req.body.id)
        const favourite = {
            favourite: true
        }
        const updateFavourite = await JobModel.findByIdAndUpdate(req.body.id, favourite)
        res.status(200).json(updateFavourite)


    }
    catch(err) {
        console.log(err)
    }
}
async function favouritesList (req, res) {
    try{
        let jobs = await JobModel.find({favourite:true})
        res.status(200).json(jobs)

    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    create, index, updateStatus, rejectedIndex, addToFavourite, favouritesList, home
  }