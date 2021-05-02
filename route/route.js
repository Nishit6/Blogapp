const express = require('express');
const { Router } = require('express');
const router = express.Router();
const Blog = require('../models/blog');




// Displaying all the Blogs

router.get('/blogs',async(req,res)=>{

    const blog = await Blog.find({});

    res.render('blog/main',{blog});
})

// Creating Form to ADD NEW Blogs....

router.get('/blogs/new',async(req,res)=>{

    

    res.render('blog/newblog');
})

// Adding new Products...

router.post('/blogs',async(req,res)=>{

   
    await Blog.create(req.body);

    res.redirect('/blogs');

   
    
   
})

// Showing Details For  a Particular Product...

router.get('/blogs/:id',async(req,res)=>{

   const showBlog = await  Blog.findById(req.params.id);

   res.render('blog/showblog',{showBlog});
})

// editing Products..

router.get('/blogs/:id/edit',async(req,res)=>{

    
    const editBlog =  await Blog.findById(req.params.id);
    res.render('blog/editblog',{editBlog});
 })



router.patch('/blogs/:id',async(req,res)=>{

   
   await Blog.findByIdAndUpdate(req.params.id,req.body);

    res.redirect(`/blogs/${req.params.id}`);
   
})

router.delete('/blogs/:id',async(req,res)=>{

   
    await Blog.findByIdAndDelete(req.params.id);
 
     res.redirect('/blogs');
  
 })
 











module.exports = router;