const JobModel = require('../models/job.js'); 

async function create(req,res) {
    try{
        let createPosting = await JobModel.create({
            company: req.body.company, 
             dateApplied: req.body.dateApplied, 
             postLink: req.body.postLink
        });
        res.status(200).json(createPosting)
    }
    catch{

    }
}

module.exports = {
    create
  }