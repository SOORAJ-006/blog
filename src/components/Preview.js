import React, { useState } from 'react'
import {blogData} from './products/Product.Data'
import './Preview.css'
import { Button } from 'react-bootstrap'


const Preview = () => {
    const [blogs , setBlogs] = useState(blogData)
    const [expanded, setExpanded] = useState({});
    
  const toggleReadMore = (index) => {
    setExpanded(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };
  return (

    blogs.map((blog , index) => (
      
        <div key={index} class="col d-flex justify-content-center mb-5">
        <div class="card shadow p-3 mb-5 bg-body rounded" style={{ width: "90%" }}>
          <img src={require(`${blog.image}`)} class="card-img-top preview_image" alt="..." />
          
          <div class="card-body d-flex flex-column align-items-start">
          
            <h5 class="card-title text-start pb-2 ">{blog.title}</h5>
            <h6 class="card-title mb-0 d-flex gap-1">Author: <h6 className='text-secondary'>{blog.author}</h6></h6>
            <h6 class="card-title d-flex gap-1">Posted On: <h6  className='text-secondary'>{blog.posted_date}</h6></h6>
            <p className={`card-text text-start blog_desc ${expanded[index] ? 'expanded' : ''}`}>
              {blog.description}
            </p>
            <Button className="btn btn-secondary" onClick={(e) => {e.preventDefault(); toggleReadMore(index);}}>
            {expanded[index] ? 'Read Less' : 'Read More'}
            </Button>
          </div>
        </div>
      </div>
    ))
    
    
  )
}

export default Preview