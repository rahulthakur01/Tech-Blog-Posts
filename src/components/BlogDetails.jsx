import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
   <div className='mt-[50px]'>
     <div className='w-11/12 flex flex-col mx-auto max-w-[650px] '>
      <NavLink to={`/blog/${post.id}`} >
        <span className="font-bold text-lg">{post.title}</span>
      </NavLink>
      <p>
        By
        <span className='italic'>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='font-semibold underline cursor-pointer'>{post.category}</span>
        </NavLink>
      </p>
      <p className="py-1"> Posted on {post.date} </p>
      <p className='mt-4 mb-2'> {post.content}</p>
      <div>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='text-sm font-semibold underline text-blue-800 mx-1 cursor-pointer'>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
   </div>
  )
}

export default BlogDetails
