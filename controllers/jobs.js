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

async function index (req, res) {
    try{
        let jobs = await JobModel.find({$or: [{status:"Pending/No Response"}, { status:  "Interview"}]})
        res.status(200).json(jobs)

    }
    catch(err){
        console.log(err)
    }
}

async function updateStatus (req, res) {
    try{
        const status = {
            status: req.body.status
        }
        const newStatus = await JobModel.findOneAndUpdate ({_id: req.body.jobID}, status) 
        res.status(200).json(newStatus)

    }
    catch (err){
        console.log(err)
    }
}

module.exports = {
    create, index, updateStatus
  }