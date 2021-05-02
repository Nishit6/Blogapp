const mongoose = require('mongoose');





const blogSchema = new mongoose.Schema({

        img:{
            type:String,
            required:true
        },
        title:{
                type:String,
                required:true
                
        },
        author:{
            type:String,
            
        },
        text:{
            type:String,
            
         },
      
        
})


const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;
