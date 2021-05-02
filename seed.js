
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const blogArray =[
    {   
        
      
        
        title:"Random Architecture",
        img:"https://images.unsplash.com/photo-1619528637719-48b3eef2f8c2?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8YkRvNDhjVWh3bll8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author:" nishit",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odio expedita aperiam laboriosam obcaecati. Cumque beatae quo tempora magni expedita atque quae mollitia molestias. Rem repellat expedita impedit nobis nam!"
        
        
    },
    {   
        
        
        title:"My design",
        img:"https://images.unsplash.com/photo-1615036883881-89c4994437f5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8YkRvNDhjVWh3bll8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        author:" Kartik",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odio expedita aperiam laboriosam obcaecati. Cumque beatae quo tempora magni expedita atque quae mollitia molestias. Rem repellat expedita impedit nobis nam!"
    },
    {   
        
        
        title:"My new blog",
        img:"https://images.unsplash.com/photo-1619047853129-8c2fce05df0f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
       author:"prateek",
       text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi odio expedita aperiam laboriosam obcaecati. Cumque beatae quo tempora magni expedita atque quae mollitia molestias. Rem repellat expedita impedit nobis nam!"
    }]

    
    function seed (){

        Blog.insertMany(blogArray)
       
     .then(()=>{
            console.log("Data Seeded Successfully....");
        })
        
    .catch((err)=>{
            console.log(err);
            console.log("Seeding Error");
        })
    }
    
    
    module.exports = seed;