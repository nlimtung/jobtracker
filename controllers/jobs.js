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
    catch{

    }
}

async function index (req, res) {
    try{
        let jobs = await JobModel.find()
        res.status(200).json(jobs)

    }
    catch(err){
        console.logerr
    }
}

module.exports = {
    create, index
  }