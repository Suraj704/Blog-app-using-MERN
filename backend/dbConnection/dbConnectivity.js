const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://{name}:{password}@blogapp.pu9gq1e.mongodb.net/test',(err,result)=>{
    if (err) {
        console.log("Db connection error",err)
    } else {
        console.log('Db connected .')
    }
});
