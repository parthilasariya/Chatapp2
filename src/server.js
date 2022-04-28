const mongoose = require('mongoose');
const Msg = require('./models/messages');
const mongoDB = 'mongodb+srv://chatapp:chatapp123@cluster0.9z1hg.mongodb.net/message-database?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
        console. log('connected')
    }).catch(err => console.log(err))
    