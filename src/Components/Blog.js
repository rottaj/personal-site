import React from 'react'

const Blog = (props) => (
    <div className="blog">
        {console.log(props.blog)}
        <h3>{props.blog.title}</h3>
        <p>{props.blog.categories.map(cat => cat)}</p>
    </div>
)

export default Blog