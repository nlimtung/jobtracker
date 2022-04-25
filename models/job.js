const mongoose = require ('mongoose')
const {Schema} = mongoose

const jobSchema = new mongoose.Schema (
    {
        company: String, 
        dateApplied: {
            type: Date, 
            default: Date.now

        }, 
        postLink: String, 
        status: {
            type: String, 
            enum: ["Pending/No Response", "Interview", "Rejected"]
        }, 
        comment: String 

    }, 
    {
        timestamps: true
    }
)



let JobModel = mongoose.model('Shift', jobSchema); 
module.exports = JobModel;     
