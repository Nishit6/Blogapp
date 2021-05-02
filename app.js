const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const Blog = require('./models/blog');
const seedDB = require('./seed');
const blogRoutes = require('./route/route');




app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


mongoose.connect('mongodb://localhost/BlogAPP', {useNewUrlParser: true, useUnifiedTopology: true})

.then(()=>{
    console.log("DB CONNECTED");
})
.catch((err)=>{
    console.log(err);
    console.log("Connection Error");
})


// calling function....
// seedDB();
// using routes...
app.use(blogRoutes);




 

app.get('*',(req,res)=>{

    res.send("INVALID PATH");
})


app.listen(3000,()=>{
    console.log("Server started at Port 3000");
})