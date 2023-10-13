const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path= require('path');
const morgan= require('morgan');



const MongoDB ='mongodb+srv://deoleyo:Kasongi2014@cluster0.heaqntp.mongodb.net/';
console.log(MongoDB);

 mongoose.set('strictQuery', true);


const connectDB = async () => {
    try {
        await mongoose.connect(MongoDB, {
            useUnifiedTopology: true,
        });
        console.log("MongoDB is connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

connectDB();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan("tiny"));
app.use(express.json());
// app.use('/static', express.static(path.join(__dirname,'public')));


app.get('/', async (req, res) => {
    res.render('mundyo/index'); 
});



app.listen(process.env.PORT || 3000);