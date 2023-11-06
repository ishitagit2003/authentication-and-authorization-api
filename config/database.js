const  mongoose = require('mongoose')

require('dotenv').config()

exports.connect = () => {
    mongoose.connect(('mongodb+srv://ishitagupta2003:qwerty12@cluster0.wnoxcyd.mongodb.net/?retryWrites=true&w=majority'), {
            useNewUrlParser: true,
            useUnifiedTopology : true
    }).then(()=>console.log("DB Connected Successfully✅"))
    .catch((error)=>{ 
        console.log("this error occured"+ error)
        process.exit(1)
    })
}