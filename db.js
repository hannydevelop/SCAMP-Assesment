const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/SCAMP', (err) =>{
    if (!err)
       console.log('mongodb connected successfully');
    else
    console.log('Error in DB connection:' + JSON.stringify(err, undefined, 2));
});
