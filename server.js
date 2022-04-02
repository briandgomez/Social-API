const express = require('express');
const mongoose = require('mongoose');

//Creates a new instance of Express.js for the application
const app = express();
const PORT = process.env.PORT || 3001;

//Tells application what to use to make interaction between client and data better
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

//Connects to MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Social-API', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Logs all mongo queries  being executed
mongoose.set('debug', true);

//Anticipates if sever runs successfully
app.listen(PORT, () => console.log(`Successfully connected to localhost:${PORT}`));