const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path= require('path');



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
app.use(express.urlencoded({ extended: false }));
// app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname,'public')));


app.get('/', async (req, res) => {
    res.render('index'); 
});

// app.listen(8000, () => {
//     console.log('App is running on port 8000');
// });

app.listen(process.env.PORT || 8000);