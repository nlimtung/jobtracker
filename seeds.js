require ("dotenv").config();

require ('./config/database');

const Jobs = require ('./models/job')

Jobs.deleteMany({})
.then(function(results) {
    console.log(results)
    process.exit()
})